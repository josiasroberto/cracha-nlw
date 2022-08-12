const socialMediaLinks = {
  linkedin: "in/josias-roberto",
  github: "josiasroberto",
  youtube: "josiasroberto1",
  facebook: "josiasroberto9",
  instagram: "josiiasroberto",
  twitter: "josiasroberto1"
}

function changeMediaSocialLinks(){
  for(li of socialLinks.children){
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${socialMediaLinks[social]}`
  }
  github.href += socialMediaLinks.github
}

changeMediaSocialLinks()


function getGithubProfileInfos(){
  const url= `https://api.github.com/users/${socialMediaLinks.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userAvatar.src = data.avatar_url
    userName.textContent = data.name
    userLogin.textContent = data.login
    userBio.textContent = data.bio

  })
}

getGithubProfileInfos()














