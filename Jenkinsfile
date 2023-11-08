

pipeline {
  agent none 

  stages {
    stage('Test') {
      agent {
        docker {
          image 'node:18-alpine'
          args '-u 0:0 -v /tmp:/root/.cache'
        }
      }
      steps {
        sh "echo 'TEST'"
        sh 'node --version'
        sh 'docker ps'
      }
    }

    stage('Build') {
      steps {
        sh 'uname -a'
        sh "echo 'Build'"
      }
    }

    stage('Deploy') {
      steps {
        sh "echo 'Deploy!'"
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
   
