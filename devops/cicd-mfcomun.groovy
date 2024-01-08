@Library('shared-library-sreasons')
import com.sreasons.PipelineUtil

def utils = new PipelineUtil(steps, this)
try{
  node//('windows-slave')
  {
    def parameters = []

    stage("Setting Variables")
    {
      parameters = [
        projectID : "weberp",
      ]
    }

    stage("Git") 
    {
      utils.initialize(parameters)
    }
    
    /*stage("Quality-Code"){
      //utils.executeSonnarForNode()
    }

    stage("Build") 
    {
      utils.executeBuildNodeJSApp()             
    }*/
  //}


  //node{
    /*stage("Release"){
      utils.executeUploadArtifact()
    }

    stage("Deploy"){
      utils.executeDeployWebApplication()    
    }*/
  }
  //utils.sendNotificacionRest("")
}
catch(err)
{
  //utils.sendNotificacionRest(err.toString())
  //steps.echo err.toString()
  throw err;
}
