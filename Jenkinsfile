pipeline {
    agent any

    tools {
        nodejs 'NodeJS-Playwright'
    }

    environment {
        BASE_URL = 'https://www.saucedemo.com/'
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

        stage('Install Playwright Browser') {
            steps {
                bat 'npx playwright install chromium'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'saucedemo-login',
                        usernameVariable: 'SAUCE_USERNAME',
                        passwordVariable: 'SAUCE_PASSWORD'
                    )
                ]) {
                    bat 'npx playwright test --project=chromium'
                }
            }
        }

        stage('Publish Playwright Report') {
    steps {
        publishHTML(target: [
            allowMissing: false,
            alwaysLinkToLastBuild: true,
            keepAll: true,
            reportDir: 'playwright-report',
            reportFiles: 'index.html',
            reportName: 'Playwright HTML Report'
        ])
    }
}
    }
}