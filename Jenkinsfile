pipeline {
  agent none 
  
  environment {
    DOCKER_IMAGE = 'ntnghiant/nodejs-jenkins-docker-do' 
  }

  stages {
    

    stage("Install packages") {
      agent {
        docker {
          image 'node:18-alpine'
          args '-u 0:0 -v /tmp:/root/.cache'
        }
      }

      steps {
        echo "yarn test"
        sh "ls -la"
        sh "pwd"
        sh "node -v"
        sh "yarn -v"
        sh "ls -la ~"
      }
    }
    
    stage("Build") {
      agent {
        node { label 'built-in'}
      }
      environment {
        DOCKER_TAG="${GIT_BRANCH.tokenize('/').pop()}-${GIT_COMMIT.substring(0,7)}"
      }
      steps {
        sh "pwd"
        sh "docker -v"
        sh "echo ${DOCKER_TAG}"
        

        //clean to save disk
        sh "docker image rm ${DOCKER_IMAGE}:${DOCKER_TAG}"
        sh "docker image rm ${DOCKER_IMAGE}:latest"
      }
    }

    stage("Deploy") {
      steps {
        echo "yarn start"
      }
    }
  }
   
  post {
    success {
      echo "SUCCESSFUL"
    }

    failure {
      echo "FAILED"
    }
  }
}