pipeline {
    agent any

    environment {
        NODE_VERSION = '18.x'
        DOCKER_IMAGE = 'vue3-app:latest'
        REMOTE_SERVER = '47.103.169.121'
        REMOTE_USER = 'root'
    }

    stages {
        stage('拉取代码') {
            steps {
                git 'https://github.com/gukaitest/personal-project-presentation.git'
            }
        }

        stage('构建项目') {
            steps {
                nodejs(NODE_VERSION) {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('创建 Docker 镜像') {
            steps {
                sh "docker build -t ${DOCKER_IMAGE} ."
            }
        }

        stage('部署到服务器') {
            steps {
                script {
                    sshagent(['your_ssh_key_credential_id']) {
                        // 停止并删除旧容器
                        sh "ssh ${REMOTE_USER}@${REMOTE_SERVER} 'docker stop vue3-app-container || true && docker rm vue3-app-container || true'"
                        // 保存镜像并传输到服务器
                        sh "docker save ${DOCKER_IMAGE} | ssh ${REMOTE_USER}@${REMOTE_SERVER} 'docker load'"
                        // 运行新容器
                        sh "ssh ${REMOTE_USER}@${REMOTE_SERVER} 'docker run -d -p 8080:80 --name vue3-app-container ${DOCKER_IMAGE}'"
                    }
                }
            }
        }

        stage('检查 Nginx 配置') {
            steps {
                echo '请检查 Nginx 配置是否正确指向 8080 端口。'
            }
        }
    }

    post {
        success {
            echo '部署成功！'
        }
        failure {
            echo '部署失败，请检查日志。'
        }
    }
}
