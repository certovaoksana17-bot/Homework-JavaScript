const form = document.getElementById('postForm')
const responseDiv = document.getElementById('response')

form.addEventListener('submit', async (e) => {
    e.preventDefault()


    const formData = {
        userId: document.getElementById('userId').value,
        title: document.getElementById('title').value,
        body: document.getElementById('body').value
    }

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        const data = await response.json()

        responseDiv.style.display = 'block'
        responseDiv.className = 'success'
        responseDiv.innerHTML = `
    <strong>Успех! Сервер вернул:</strong>
    <pre>${JSON.stringify(data, null, 2)}</pre>
    `

        form.reset()
    } catch (error) {
        alert('Произошла ощибка при отправке')
        console.error(error)
    }
})





const loadBtn = document.getElementById('loadPosts')
const postsList = document.getElementById('postsList')

loadBtn.addEventListener('click', async () => {
    loadBtn.disabled = true
    loadBtn.textContent = 'Загрузка...'
    postsList.innerHTML = ''

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await response.json()

        posts.forEach(post => {
            const postElement = document.createElement('div')
            postElement.className = 'post-item'
            postElement.id = `post-${post.id}`
            postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <button onclick="updatePost(${post.id})">Редактировать</buton>
            <button onclick="deletePost(${post.id})">Удалить пост</button>
            `
            postsList.appendChild(postElement)
        })

    } catch (error) {
        postsList.innerHTML = '<p style="color:red">Ошибка при загрузке</p>'
        console.error(error)

    } finally {
        loadBtn.disabled = false
        loadBtn.textContent = 'Загрузить список постов'
    }
})

async function deletePost(id) {
    if (!confirm('Вы уверены, что хотите удалить этот пост?')) return

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE'
        })

        if (response.ok) {
            const elementToRemove = document.getElementById(`post-${id}`)
            if (elementToRemove) {
                elementToRemove.remove()
                alert(`Пост №${id} успешно удален`)
            }
        } else {
            alert('Ошибка при удалении на сервере')
        }
    } catch (error) {
        console.error('Ошибка:', error)
        alert('Не удалось связаться с сервером')
    }
}

async function updatePost(id) {
    const newTitle = prompt('Введите новый заголовок:')
    if (!newTitle) return

    try {
        const response = await fetch ('https://jsonplaceholder.typicode.com/posts/1', {
             method: 'PUT',
            body: JSON.stringify ({
                id: id,
                title: newTitle,
                body: 'Обновленный текст поста',
                userId: 1
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

        const updatedPost = await response.json()

        if (response.ok) {
            const postElement = document.getElementById(`post-${id}`)
            postElement.querySelector('h3').textContent = updatedPost.title
            alert(`Пост №${id} успешно обновлен через PUT`)
        }
    } catch (error) {
        console.error('Ошибка:', error)
    }
}

///В методе PUT можно поменять весь ресурс, а в методе PATCH - частично поменять