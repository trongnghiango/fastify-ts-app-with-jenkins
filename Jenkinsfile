

pipeline {
  agent none 
  
  stages {
    agent {
      docker {
        image 'node:18-alpine'
        args '-u 0:0 -v /tmp:/root/.cache'
      }
    }
    stage('Test') {
      steps {
        sh 'node --version'
        sh 'docker --version'
      }
    }

    stage('Build') {
      steps {
        sh 'node --version'
        sh 'git remote -v'
      }
    }

    stage('Deploy') {
      steps {
        sh 'node --version'
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
   
