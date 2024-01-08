node{
  def variablesSonarQube = [
    workspace : WORKSPACE,
    projectKey: ""
  ]


  def variablesReleaseDeploy = [
    nexusRepository : "",
    buildId         : currentBuild.id
  ]

  def variablesGenerales = [
    ftpDestDir  : "",
    sshIdCred   : ""
  ]

  def variablesTerraform = [
    tfPosition          : "D:\\JenkinsTools\\Terraform\\",
    folderTF_Files      : "terraform",
    backupTF_Files      : "",
    varAWSCredentialsTF : "",
    projectName         : "tiendalink",
    pathFolder          : "apps/intranet/",
    pathHome            : "/home/sreasons/",
    pathAbsFolder       : "",
    namePrjAutoQA       : "tiendalink-autoqa"  ,
    urlAutoQA           : "tiendalink-autoqa.sreasons.com",
    buildId             : currentBuild.id,
  ]


  stage("Git") {
    stageGit()
    stageDefineVariables(variablesSonarQube, variablesReleaseDeploy, variablesGenerales, variablesTerraform)
  }

  stage('Quality-Code') {
 //   stageQualityCode(variablesSonarQube)
  }

  stage("Build"){
    stageBuild()
  }

  stage("Test"){
//     stageTest(variablesGenerales, variablesTerraform)
  }

  stage("Release"){
    stageRelease(variablesReleaseDeploy)
  }

  stage("Deploy"){
    stageDeploy(variablesReleaseDeploy, variablesGenerales)
  }
}

def stageDefineVariables(def variablesSonarQube, def variablesReleaseDeploy, def variablesGenerales, def variablesTerraform){

  powershell 'rm .\\src\\constants\\hostserver.constant.ts'

  if(env.BRANCH_NAME == 'desarrollo'){

    variablesSonarQube.projectKey = "ERP-MF-COMUN-DEV"
    variablesReleaseDeploy.nexusRepository = "erp-mf-comun-dev"
    variablesGenerales.ftpDestDir = "apps/intranet/erpperu2-dev/erp-mf-comun"
    variablesGenerales.sshIdCred = "devops-hst-qa"
    powershell 'mv .\\src\\constants\\hostserver-dev.constant.ts .\\src\\constants\\hostserver.constant.ts'
  } else if(env.BRANCH_NAME == 'pruebas'){

    variablesSonarQube.projectKey = "ERP-MF-COMUN-QA"
    variablesReleaseDeploy.nexusRepository = "tiendalink-qa"
    variablesGenerales.ftpDestDir = "tiendalink-qa"
    variablesGenerales.sshIdCred = "devops-hst-qa"
    powershell 'mv .\\src\\constants\\hostserver-qa.constant.ts .\\src\\constants\\hostserver.constant.ts'

    variablesTerraform.varAWSCredentialsTF = "terraform.qa.tfvars"
    variablesTerraform.pathFolder = "apps/intranet/"
    variablesTerraform.pathHome = "/home/sreasons/"
    variablesTerraform.namePrjAutoQA = "tiendalink-autoqa"
    variablesTerraform.urlAutoQA = "tiendalink-autoqa.sreasons.com"

  } else if(env.BRANCH_NAME == 'certificacion'){

    variablesSonarQube.projectKey = "ERP-MF-COMUN-CRT"
    variablesReleaseDeploy.nexusRepository = "erp-mf-comun-crt"
    variablesGenerales.ftpDestDir = "apps/intranet/erpperu2-crt/erp-mf-comun"
    variablesGenerales.sshIdCred = "devops-hst-crt"
    powershell 'mv .\\src\\constants\\hostserver-crt.constant.ts .\\src\\constants\\hostserver.constant.ts'

    variablesTerraform.varAWSCredentialsTF = "terraform.qa.tfvars"
    variablesTerraform.pathFolder = "apps/intranet/"
    variablesTerraform.pathHome = "/home/jenkins/"
    variablesTerraform.namePrjAutoQA = "tiendalink-autocrt"
    variablesTerraform.urlAutoQA = "tiendalink-autocrt.startyoin.com"

  } else if (env.BRANCH_NAME == 'produccion'){

    variablesSonarQube.projectKey = "TIENDALINK-PRD"
    variablesReleaseDeploy.nexusRepository = "tiendalink-prd"
    variablesGenerales.ftpDestDir = "tiendalink-prd"
    variablesGenerales.sshIdCred = "devops-hst"
    powershell 'mv .\\src\\constants\\hostserver-prd.constant.ts .\\src\\constants\\hostserver.constant.ts'

    variablesTerraform.varAWSCredentialsTF = "terraform.prd.tfvars"
    variablesTerraform.pathFolder = "apps/intranet/"
    variablesTerraform.pathHome = "/home/jenkins/"
    variablesTerraform.namePrjAutoQA = "tiendalink-autoprd"
    variablesTerraform.urlAutoQA = "tiendalink-autoprd.mitiendalink.com"

  }
}

def stageGit(){
  powershell 'git config --system core.longpaths true'
  powershell 'if(Test-Path -Path .\\dist ){ Remove-Item .\\dist -Recurse -ErrorAction Ignore  }'
  checkout scm
}

def stageQualityCode(def variablesSonarQube){
  def scannerHome = tool 'SonarQubeScanner'
  withSonarQubeEnv('sonarqube') {
    bat "${scannerHome}\\bin\\sonar-scanner -D\"sonar.projectKey=${variablesSonarQube.projectKey}\" -D\"sonar.sources=${variablesSonarQube.workspace}\" -D\"sonar.host.url=https://sonarqube.sreasons.com\" -D\"sonar.login=13921043a6c23ad381e174baeffd7589fdd616ce\""
  }
  timeout(time: 1, unit: 'HOURS') {
    def qg = waitForQualityGate()
    if (qg.status != 'OK') {
      error "Pipeline aborted due to quality gate failure: ${qg.status}"
    }
  }
}

def stageBuild(){
  powershell 'npm install'
  powershell 'npm run build'
}

def stageTest(def variablesGenerales, def variablesTerraform){
  if(env.BRANCH_NAME == 'produccion' ) {
    //provisionandoooo
    substageProvision(variablesGenerales, variablesTerraform)
    dir("robot_files"){

      try {
          bat "batrobotV3.bat https://${variablesTerraform.urlAutoQA}/inicio PRUEBAS6.SMARTR@GMAIL.COM 123456 ${variablesTerraform.urlAutoQA} 31"
      } catch (Exception e){
          echo 'Exception occurred ' + e.toString()
      } finally {


        step(
          [
            $class              : 'RobotPublisher',
            outputPath          : 'REPORTES',
            outputFileName      : 'output.xml',
            reportFileName      : 'report.html',
            logFileName         : 'log.html',
            disableArchiveOutput: false,
            passThreshold       : 0,
            unstableThreshold   : 0,
            otherFiles          : "**/*.png,**/*.jpg",
          ]
        )
        //desprovisionandoooo
        substageUnprovision(variablesGenerales, variablesTerraform)
      }
    }
  }

}

def substageUnprovision(def variablesGenerales, def variablesTerraform){
  if(env.BRANCH_NAME == 'produccion'){
    dir(variablesTerraform.folderTF_Files){
      powershell '& "'+variablesTerraform.tfPosition+'terraform.exe" destroy -auto-approve'

    }
  }

  if(env.BRANCH_NAME == 'produccion'){
    variablesTerraform.pathAbsFolder = variablesTerraform.pathHome + variablesTerraform.pathFolder + variablesTerraform.namePrjAutoQA
    script{
      sshPublisher(
        continueOnError: false,
        failOnError: true,
        publishers: [
          sshPublisherDesc(
          configName: variablesGenerales.sshIdCred,
          verbose: true,
          transfers: [
            sshTransfer( execCommand: ' if [ -d "'+ variablesTerraform.pathAbsFolder +'" ]; then rm -r '+ variablesTerraform.pathAbsFolder +'/; fi;'),
            sshTransfer( execCommand: 'cp -r '+ variablesTerraform.pathHome + variablesTerraform.pathFolder +'hosting-404 ' + variablesTerraform.pathAbsFolder),
            sshTransfer( execCommand: 'chmod 777 -R '+ variablesTerraform.pathAbsFolder +'/*')
        ])
      ])
    }

  }
}

def substageProvision(def variablesGenerales, def variablesTerraform){
  if(env.BRANCH_NAME == 'produccion'){
    dir(variablesTerraform.folderTF_Files){

      variablesTerraform.backupTF_Files = variablesTerraform.projectName + '_'+ env.BRANCH_NAME + '_tf_'+ variablesTerraform.buildId

      powershell 'Copy-Item '+variablesTerraform.tfPosition + variablesTerraform.varAWSCredentialsTF + ' -Destination terraform.tfvars'
      powershell '& "'+variablesTerraform.tfPosition+'terraform.exe" init'
      powershell '& "'+variablesTerraform.tfPosition+'terraform.exe" plan'
      powershell '& "'+variablesTerraform.tfPosition+'terraform.exe" apply -auto-approve'
    }


    powershell 'if( !(Test-Path -Path ' + variablesTerraform.tfPosition + variablesTerraform.backupTF_Files + ') ) { New-Item -ItemType directory -Path '+ variablesTerraform.tfPosition + variablesTerraform.backupTF_Files + ' } '
    powershell 'xcopy /y .\\'+variablesTerraform.folderTF_Files+' '+ variablesTerraform.tfPosition + variablesTerraform.backupTF_Files +' /s /i'
  }

  if(env.BRANCH_NAME == 'produccion'){

    variablesTerraform.pathAbsFolder = variablesTerraform.pathHome + variablesTerraform.pathFolder + variablesTerraform.namePrjAutoQA

    dir("dist"){
      powershell "7z a -t7z dist.7z *"
      script{
        sshPublisher(
          continueOnError: false,
          failOnError: true,
          publishers: [
            sshPublisherDesc(
            configName: variablesGenerales.sshIdCred,
            verbose: true,
            transfers: [
              sshTransfer(
                sourceFiles: "dist.7z",
                remoteDirectory: variablesTerraform.pathFolder + variablesTerraform.namePrjAutoQA + "-temp/"
              ),
              sshTransfer( execCommand: '7z x '+ variablesTerraform.pathAbsFolder +'-temp/dist.7z -o"' + variablesTerraform.pathAbsFolder +'-temp" -y'),
              sshTransfer( execCommand: ' if [ -d "' + variablesTerraform.pathAbsFolder + '-temp/dist.7z" ]; then rm -r ' + variablesTerraform.pathAbsFolder + '-temp/dist.7z; fi;'),
              sshTransfer( execCommand: ' if [ -d "' + variablesTerraform.pathAbsFolder + '" ]; then rm -r '+ variablesTerraform.pathAbsFolder +'/; fi;'),
              sshTransfer( execCommand: 'mv '+ variablesTerraform.pathAbsFolder +'-temp ' + variablesTerraform.pathAbsFolder),
              sshTransfer( execCommand: 'chmod 777 -R '+ variablesTerraform.pathAbsFolder +'/*')
          ])
        ])
      }

    }
  }

}

def stageRelease(def variablesReleaseDeploy){
  def currentResult = currentBuild.result ?: 'SUCCESS'
  echo "State: ${currentResult}"
  if (currentResult != 'SUCCESS') {
    return
  }


  dir("dist"){
    powershell "7z a -t7z dist.7z *"
    withCredentials([usernamePassword(credentialsId: 'nexus-credentials', passwordVariable: 'pass', usernameVariable: 'user')]) {
      bat ("curl -X \"POST\" https://nexus.sreasons.com/service/rest/v1/repositories/raw/hosted   -H \"accept: application/json\"   -H \"Content-Type: application/json\"   -d \"{\\\"name\\\": \\\"${variablesReleaseDeploy.nexusRepository}\\\",\\\"online\\\": true,\\\"storage\\\": {\\\"blobStoreName\\\": \\\"default\\\",\\\"strictContentTypeValidation\\\": true,\\\"writePolicy\\\": \\\"ALLOW\\\"},\\\"cleanup\\\": {\\\"policyNames\\\": [\\\"string\\\"]},\\\"component\\\": {\\\"proprietaryComponents\\\": false},\\\"raw\\\": {\\\"contentDisposition\\\": \\\"ATTACHMENT\\\"}}\" --user ${user}:${pass}")
      bat ("curl --user ${user}:${pass} --upload-file dist.7z https://nexus.sreasons.com/repository/${variablesReleaseDeploy.nexusRepository}/${variablesReleaseDeploy.nexusRepository}-${variablesReleaseDeploy.buildId}.7z")
    }
  }
}

def stageDeploy(def variablesReleaseDeploy, def variablesGenerales) {

  def currentResult = currentBuild.result ?: 'SUCCESS'
  echo "State: ${currentResult}"
  if (currentResult != 'SUCCESS') {
    return
  }

  withCredentials([usernamePassword(credentialsId: 'nexus-credentials', passwordVariable: 'pass', usernameVariable: 'user')]) {
    script{
      sshPublisher(
        continueOnError: false,
        failOnError: true,
        publishers: [
          sshPublisherDesc(
          configName: variablesGenerales.sshIdCred,
          verbose: true,
          transfers: [
            sshTransfer( execCommand: "curl -o distRepo.7z -L -X GET \"https://nexus.sreasons.com/repository/${variablesReleaseDeploy.nexusRepository}/${variablesReleaseDeploy.nexusRepository}-${variablesReleaseDeploy.buildId}.7z\" -H \"accept: application/json\" --user ${user}:${pass} -s" ),
            sshTransfer( execCommand: 'rm -r /home/jenkins/'+variablesGenerales.ftpDestDir+'/* '),
            sshTransfer( execCommand: '7z x distRepo.7z -o"/home/jenkins/' +variablesGenerales.ftpDestDir +'" '),
            sshTransfer( execCommand: 'chmod 777 -R /home/jenkins/'+ variablesGenerales.ftpDestDir +'/*'),
            sshTransfer( execCommand: 'rm distRepo.7z ')
        ])
      ])
    }
  }

}
