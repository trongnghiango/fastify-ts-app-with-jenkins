

pipeline {
  agent {
    docker { image 'node:16.13.1-alpine' }
  }
  stages {
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
   
