pipeline {
    agent any

    stages {
        stage('Build frontend and backend containers') {
            steps {
                sh "docker-compose build"
            }
        }
        stage('Run frontend container and tests') {
            steps {
                sh "docker-compose run -e CI=true front npm run test"
            }
        }
        stage('Shut down containers') {
            steps {
                sh 'docker-compose down'
            }
        }
        stage('Checkout') {
            steps {
                sh 'git checkout release'
                sh 'git merge origin/dev'
                sh 'git push origin release'
            }
        }
    }
}