document.addEventListener('click', function (e) {
  const linkAntigo = document.getElementsByClassName('csave')
  if (linkAntigo[0]) {
    linkAntigo[0].remove()
  }
  let count = 0
  const interval = setInterval(() => {
    const [group] = document.getElementsByClassName('z4t2k')
    const [main] = document.querySelectorAll('#main .YmixP')
    try {
      const groupName = group.innerText
      const data = main.innerText
      if (data && data != 'click here for group info') {
        clearInterval(interval)
        const contactsArr = data.split(',')
        if (contactsArr.length > 1) {
          const contactsFilter = contactsArr.filter(item => {
            let contact = item.replace(/ |-/g, "")
            if (contact.startsWith('+')) {
              return contact
            }
          })
          let contactsClean = contactsFilter.map(item => {
            let contact = item.replace(/ |-|(|)/g, "")
            return contact
          })
          if (contactsClean) {
            const [elementHeader] = document.getElementsByClassName('_1-qgF')
            

            let documentCSV = ``
            for (const item of contactsClean) {
              documentCSV += `${item}
`
            }

            let csave = document.createElement('div')
            csave.className = 'csave'
            
elementHeader.appendChild(csave)

            const lk = document.createElement('a')
lk.setAttribute('style', 'padding:10px 15px;background:#fff;z-index:999;color:rgb(152,152,152);font-size:14px;font-weight:bold;position:fixed;left:2%;bottom:80%;background-color:rgb(255,255,255);border-radius:20px;box-shadow:rgb(0 0 0 / 6%) 0 1px 1px 0,rgb(0 0 0 / 20%) 0 2px 5px 0')
            lk.href = window.URL.createObjectURL(
              new Blob([documentCSV], {
                type: "text/plain"
              })
            )
            lk.setAttribute("download", `${groupName}.txt`)
            // lk.click()
            // window.URL.revokeObjectURL(lk.href)
            csave.append(lk)
			lk.innerHTML = "Save";
          }
        }
      }
    } catch (error) {
      console.log('Error: ', error)
      if (count >= 10) clearInterval(interval)
    }
    count++
  }, 1000)
}, false);
