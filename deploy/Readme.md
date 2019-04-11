## Deployment of Engineering Landing page frontend
### Playbook will:  
* Check if zip archive is present in current directory
* Upload zip file to the remote server  
* Execute remote deployment script    
* Outputs informational log file  
___
#### Instructions
1. Fill in host information in `hosts.ini` file  
2. Please make sure you have build frontend with passed in env variable 
```shell
export REACT_APP_API_URL="https://example.com/graphql" REACT_APP_STATIC_URL="https://example.com"`
```
3. Prepare build.zip archive localy and place same directory as playbook `deploy.yml`  
4. Make sure you pass username with `-u your_username` if it differs from your workstation and remote server  
5. Run the deployment: 
```shell
ansible-playbook -u server-username -i hosts.ini deploy.yml -e "target=dev" -v
```
---
## Optionally you can build fronted with build.yml playbook
### Playbook will:  
* Check if env variables are set   
* Create temporary directory  
* Clone latest code from master branch from github repo.  
* Build code with `npm`  
* Copy archive `build.zip` to current directory


___
#### Instructions
1. Fill in host information in `hosts.ini` file 
2. Execute `ansible-playbook -i hosts.ini build.yml -e "target=localhost" -v`  
3. Github repo and build directory can be modified in playbook `vars:` section  
```yaml
vars:
    repo: https://github.com/evolution-gaming/evoneering.git
    build_path: "/var/tmp_build"
    static_build_dir: "build"
```
4. Also it is possible to build on the remote server, when specifying `--extra-vars "target=dev build=remote"`. 
By default build will be performed locally.  