pipeline{
    agent any

    triggers{
        githubPush()
    }

    stages{
        stage('Test')
        {
            steps{
                sh 'echo Output-1'
            }
        }

        stage('Build'){
            steps{
                sh 'echo Output-2'
            }
        }

        stage('Deploy'){
            steps{
                sh 'echo Output-3'
            }
        }
    }

    post {

        failure {
            emailext(
                subject: "FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: "Build failed: ${env.BUILD_URL}",
                to: "your-email@gmail.com",
                attachLog: true
            )
        }
    }
}

