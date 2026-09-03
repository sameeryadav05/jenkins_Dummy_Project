pipeline{
    agent any
    stages{
        stage('Test')
        {
            steps{
                sh echo "Output-1"
            }
        }

        stage('Build'){
            steps{
                sh echo "Output-2"
            }
        }

        stage('Deploy'){
            steps{
                sh echo "Output-3"
            }
        }
    }
}