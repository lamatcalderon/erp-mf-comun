@Library('shared-library-sreasons@feature-config-yaml')
import com.sreasons.PipelineUtil

def utils = new PipelineUtil(steps, this)

node('windows-slave')
{
  def parameters = []

  stage("Setting Variables")
  {
    parameters = [
      projectID : "mfcomun",
    ]
  }

  stage("Git") 
  {
    utils.initialize(parameters)
  }
  
  stage("Quality-Code"){
    utils.executeSonnarForNode()
  }

  stage("Build") 
  {
    utils.executeBuildNodeJSApp()             
    stash includes: '/dist/**/*', name: 'builtSources'
  }
}

node{
  stage("Release"){
    unstash 'builtSources'
    utils.executeUploadArtifact()
  }

  stage("Deploy"){
    utils.executeDeployLinuxHostingFront()    
  }
}
