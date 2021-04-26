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
            csave.setAttribute('style', 'padding:10px 15px;border:1px solid #b0b0b0;border-radius:5px;background:#fff;font-weight:600')
elementHeader.appendChild(csave)

            const lk = document.createElement('a')

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
