const progress = document.querySelectorAll('.progress-done');

for (let i = 0; i < progress.length; i++)
{
    porcentagem = progress[i].getAttribute('data-done') + '%';
    progress[i].style.width = porcentagem;
    progress[i].innerText = porcentagem;
    progress[i].style.opacity = 1;
}




