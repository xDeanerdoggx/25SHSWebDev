$(document).ready(function() {
    // Dark mode button
    $('#bgDark').click(function() {
      $('body').removeClass('bg-light text-dark').addClass('bg-dark text-light');
      $('.card').removeClass('bg-light text-dark').addClass('bg-black text-light');
      $('.table').removeClass('table-light').addClass('table-dark');
    });
  
    // Light mode button
    $('#bgLight').click(function() {
      $('body').removeClass('bg-dark text-light').addClass('bg-light text-dark');
      $('.card').removeClass('bg-black text-light').addClass('bg-light text-dark');
      $('.table').removeClass('table-dark').addClass('table-light');
    });
  
    // Hover effect on song cards - highlight border
    $('.card').hover(
      function() {
        $(this).css('border', '2px solid #1DB954'); // Spotify green border on hover
        $(this).css('cursor', 'pointer');
      },
      function() {
        $(this).css('border', 'none');
      }
    );

    // Change background color button
    $('#changeColorBtn').click(function() {
      $('body').css('background-color', '#3498db'); // changes background to blue
    });
});