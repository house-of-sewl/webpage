$(document).ready(function() {
    $('#user-form').bootstrapValidator({
        //submitButtons: '#postForm',
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The email address is not a valid'
                    }
                }
            },
        }
    })
    .on('success.form.bv', function(e) {
        // Prevent form submission
        e.preventDefault();

        // Get the form instance
        var $form = $(e.target);

        // Get the BootstrapValidator instance
        var bv = $form.data('bootstrapValidator');

        // Use Ajax to submit form data
        var url = 'https://script.google.com/macros/s/AKfycbyBWUyfOn7b2LsGcAt02Bd_wq6Bz6_BAMCIr0biGDPaa3a8T54Q/exec';
        var redirectUrl = 'index.html#user-form';
        // show the loading
        $('#postForm').prepend($('<span></span>').addClass('glyphicon glyphicon-refresh glyphicon-refresh-animate'));
        var jqxhr = $.post(
          url,
          $form.serialize(),
          function(data) {
            console.log("Success! Data: " + data.statusText);
            $(location).attr('href',redirectUrl);
          })
            .fail(function(data) {
                console.warn("Error! Data: " + data.statusText);
                  // HACK - check if browser is Safari - and redirect even if fail b/c we know the form submits.
                if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
                    //alert("Browser is Safari -- we get an error, but the form still submits -- continue.");
                    $(location).attr('href',redirectUrl);
                }
            });
    });
});

$(document).ready(function() {
  $('#partner-form').bootstrapValidator({
      //submitButtons: '#postForm',
      // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
      feedbackIcons: {
          valid: 'glyphicon glyphicon-ok',
          invalid: 'glyphicon glyphicon-remove',
          validating: 'glyphicon glyphicon-refresh'
      },
      fields: {
          email: {
              validators: {
                  notEmpty: {
                      message: 'The email address is required and cannot be empty'
                  },
                  emailAddress: {
                      message: 'The email address is not a valid'
                  }
              }
          },
        }
  })
  .on('success.form.bv', function(e) {
      // Prevent form submission
      e.preventDefault();

      // Get the form instance
      var $form = $(e.target);

      // Get the BootstrapValidator instance
      var bv = $form.data('bootstrapValidator');

      // Use Ajax to submit form data
      var url = 'https://script.google.com/macros/s/AKfycbyGDvQV9XxTdR09q-9-hR4Hnx4z95BphXoHzWLVrwPUqTKgwhMU/exec';
      var redirectUrl = 'index.html#partner-form';
      // show the loading
      $('#postPartnerForm').prepend($('<span></span>').addClass('glyphicon glyphicon-refresh glyphicon-refresh-animate'));
      var jqxhr = $.post(
        url,
        $form.serialize(),
        function(data) {
          console.log("Success! Data: " + data.statusText);
          $(location).attr('href',redirectUrl);
        })
          .fail(function(data) {
              console.warn("Error! Data: " + data.statusText);
              // HACK - check if browser is Safari - and redirect even if fail b/c we know the form submits.
              if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
                  //alert("Browser is Safari -- we get an error, but the form still submits -- continue.");
                  $(location).attr('href',redirectUrl);
              }
          });
  });
})
