$('#button').click(function () {
  let data = $('#data').val()

  const key = 'AFypob2tIvNzSf7g5LgNMqy0BnqbTyG6QgoLe3Yd'

  if (data) {
    url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${data}`;
  } else {
    url = `https://api.nasa.gov/planetary/apod?api_key=${key}`;
  }

  $.ajax({
    type: 'GET',
    url: `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${data}`,
    success: function (response) {
      console.log(response)

      if(response.media_type == 'image'){
        $('#picImg').removeClass('visibility')
        $('#videoImg').addClass('visibility')
      } else if (response.media_type == 'video') {
        $('#videoImg').removeClass('visibility')
        $('#picImg').addClass('visibility')
      }

      $('#picTitle').text(response.title)
      $('#picImg').attr('src', `${response.url}`)
      $('#videoImg').attr('src', `${response.url}`)
      $('#picDesc').text(response.explanation)
    }
  })
})


$('#button').click()


