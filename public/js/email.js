const sender_name = document.getElementById('sender_name')
const sender_email = document.getElementById('sender_email')
const email_subject = document.getElementById('email_subject')
const email_body = document.getElementById('email_body')
const submitBTN = document.getElementById('busmit__btn')
const mainForm = document.getElementById('___contact_form')

mainForm.addEventListener('submit', e => {
  e.preventDefault()

  Email.send({
    SecureToken: 'e9e215e8-015c-4409-a3aa-6e7a0f9628df',
    Port: 2525,
    To: 'tonnybags@gmail.com',
    From: `From: ${sender_email.value}`,
    Subject: `Subject: ${email_subject.value}`,
    Body: `From: ${sender_name.value}<br>Message: ${email_body.value}`
  }).then(message => messageSentContainer())

  sender_name.value = ''
  sender_email.value = ''
  email_subject.value = ''
  email_body.value = ''
  submitBTN.value = ''
})

function messageSentContainer () {
  if (!localStorage.getItem('message-sent')) {
    let div = document.createElement('div')
    div.id = 'msg_sent_container'
    div.innerHTML = `<p>Hi there. Thanks for reachingout. I'll get back to you ASAP. You can also call me on <code>+31 636 329 324</code></p>`
    div.style.cssText = `position:fixed;z-index:2000;top:50%;left:50%;width:50vw;overflow:hidden;
          height:0; transform:translate(-50%,-50%);size:2rem; color: var(--text-black-900); 
          border-radius:1.5rem;display:flex;justify-content:center;align-items:center;color: var(--text-black-900);
          backdrop-filter:blur(40px); box-shadow: 0 0 20px rgba(48, 46, 77, 0.15);`

    document.body.appendChild(div)
    div.classList.add('ctn_msg')

    submitBTN.innerText = 'Message Sent'

    setTimeout(() => {
      div.classList.remove('ctn_msg')
      submitBTN.innerText = 'Thank You'
      submitBTN.classList.add('DISABLED_MSG_BTN')
      localStorage.setItem('message-sent', true)
    }, 5000)

    setTimeout(() => {
      div.remove()
    }, 6000)
  } else {
    let div = document.createElement('div')
    div.id = 'msg_sent_container'
    div.innerHTML = `<p> Ooops... You have already sent me an email. I'll be in touch! </p>`
    div.style.cssText = `position:fixed;z-index:2000;top:50%;left:50%;width:50vw;overflow:hidden;
          height:0vh;transform:translate(-50%,-50%);transition:1s; border-radius:1.5rem;
          display:flex;justify-content:center;align-items:center;color: var(--text-black-900); 
          backdrop-filter:blur(40px); box-shadow: 0 0 20px rgba(48, 46, 77, 0.15);`

    document.body.appendChild(div)
    div.classList.add('ctn_msg')

    setTimeout(() => {
      div.classList.remove('ctn_msg')
      submitBTN.innerText = 'Thank You'
    }, 5000)

    setTimeout(() => {
      div.remove()
    }, 6000)
  }
}
