

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
       
      }
    }

    stage('Build') {
      agent {
        node { label 'built-in'}
      }
      steps {
        sh 'docker -v'
        sh 'docker ps'
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
   
