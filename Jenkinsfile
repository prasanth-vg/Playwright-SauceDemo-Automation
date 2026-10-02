pipeline {
    agent any

    tools {
        nodejs 'NodeJS-Playwright'
    }

    stages {

        stage('Verify Node.js') {
            steps {
                bat 'node --version'
                bat 'npm --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }
    }
}