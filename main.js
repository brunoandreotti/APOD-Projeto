$('#button').click(function () {
  let data = $('#data').val()

  const key = 'AFypob2tIvNzSf7g5LgNMqy0BnqbTyG6QgoLe3Yd'

  if (data) {
    url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${data}`
  } else {
    url = `https://api.nasa.gov/planetary/apod?api_key=${key}`
  }

  $.ajax({
    type: 'GET',
    url: `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${data}`,
    success: function (response) {
      exibeConteudo(response)
    },
    error: function () {
      alert(
        'Selecione uma data valida! As imagens estão disponíveis desde 16/06/1995 até o dia de hoje!'
      )
    }
  })
})

function exibeConteudo(response) {
  let image = $('#picImg')
  let video = $('#videoImg')

  if (response.media_type == 'image') {
    image.removeClass('visibility')
    video.addClass('visibility')
  } else if (response.media_type == 'video') {
    video.removeClass('visibility')
    image.addClass('visibility')
  }

  $('#picTitle').text(response.title)
  image.attr('src', `${response.url}`)
  video.attr('src', `${response.url}`)
  $('#picDesc').text(response.explanation)
}

$('#button').click()
