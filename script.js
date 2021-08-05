$(function() {
  
    var player = 1;
    var table = $('table');    
    
    $('td').click(function() {
      td = $(this);
      var state = getState(td);
      if(!state) {
        var pattern = definePatternForCurrentPlayer(player);
        changeState(td, pattern);
        if(checkIfPlayerWon(table, pattern)) {
        alert('Игрок '+ player +' победил');
         reset(table);
        } 
        else 
        {
          player = setNextPlayer(player);          
        }
      } 
      else 
      {
       alert('Занято');
      }
    });
    
    $('.reset').click(function() {
      player = 1;     
      reset(table);     
    });
    
  });
  
  function getState(td) 
  {
    if(td.hasClass('cross') || td.hasClass('circle')) {
      return 1;
    } 
    else 
    {
      return 0;
    }
  }
  
  function changeState(td, pattern) 
  {
    return td.addClass(pattern);
  }
  
  function definePatternForCurrentPlayer(player) 
  {
    if(player == 1) 
    {
      return 'cross';
    } 
    else
     {
      return 'circle';
    }
  }
  
  function setNextPlayer(player)
   {
    if(player == 1) 
    {
      return player = 2;
    } 
    else 
    {
      return player = 1;
    }
  }
  
  
  
  function checkIfPlayerWon(table, pattern) {

    



    var won = 0;
    if
    (
     table.find('.field1').hasClass(pattern) && table.find('.field2').hasClass(pattern) && table.find('.field3').hasClass(pattern)&& table.find('.field4').hasClass(pattern)&& table.find('.field5').hasClass(pattern)
    )
    {
      won = 1;    
    }
    else if
    (
        table.find('.field6').hasClass(pattern) && table.find('.field7').hasClass(pattern) && table.find('.field8').hasClass(pattern)&& table.find('.field9').hasClass(pattern)&& table.find('.field10').hasClass(pattern)
    )
    {
       won = 1;    
    }
    else if
    (
        table.find('.field11').hasClass(pattern) && table.find('.field12').hasClass(pattern) && table.find('.field13').hasClass(pattern)&& table.find('.field14').hasClass(pattern)&& table.find('.field15').hasClass(pattern)
    )
    {
       won = 1;    
    }
    else if
    (
        table.find('.field16').hasClass(pattern) && table.find('.field17').hasClass(pattern) && table.find('.field18').hasClass(pattern)&& table.find('.field19').hasClass(pattern)&& table.find('.field20').hasClass(pattern)
    )
    {
       won = 1;    
    }
     
    else if
    (
        table.find('.field21').hasClass(pattern) && table.find('.field22').hasClass(pattern) && table.find('.field23').hasClass(pattern)&& table.find('.field24').hasClass(pattern)&& table.find('.field25').hasClass(pattern)
    )
    {
       won = 1;    
    }
    else if
    (
        table.find('.field1').hasClass(pattern) && table.find('.field7').hasClass(pattern) && table.find('.field13').hasClass(pattern)&& table.find('.field19').hasClass(pattern)&& table.find('.field25').hasClass(pattern)
    )
    {
       won = 1;    
    }    
    else if
    (
        table.find('.field1').hasClass(pattern) && table.find('.field7').hasClass(pattern) && table.find('.field13').hasClass(pattern)&& table.find('.field19').hasClass(pattern)&& table.find('.field25').hasClass(pattern)
    )
    {
       won = 1;    
    }  
    else if
    (
        table.find('.field1').hasClass(pattern) && table.find('.field6').hasClass(pattern) && table.find('.field11').hasClass(pattern)&& table.find('.field16').hasClass(pattern)&& table.find('.field21').hasClass(pattern)
    )
    {
       won = 1;    
    }  
    else if
    (
        table.find('.field2').hasClass(pattern) && table.find('.field7').hasClass(pattern) && table.find('.field12').hasClass(pattern)&& table.find('.field17').hasClass(pattern)&& table.find('.field22').hasClass(pattern)
    )
    {
       won = 1;    
    } 
    else if
    (
        table.find('.field3').hasClass(pattern) && table.find('.field8').hasClass(pattern) && table.find('.field13').hasClass(pattern)&& table.find('.field18').hasClass(pattern)&& table.find('.field23').hasClass(pattern)
    )
    {
       won = 1;    
    } 
    else if
    (
        table.find('.field4').hasClass(pattern) && table.find('.field9').hasClass(pattern) && table.find('.field14').hasClass(pattern)&& table.find('.field19').hasClass(pattern)&& table.find('.field24').hasClass(pattern)
    )
    {
       won = 1;    
    } 
    else if
    (
        table.find('.field5').hasClass(pattern) && table.find('.field10').hasClass(pattern) && table.find('.field15').hasClass(pattern)&& table.find('.field20').hasClass(pattern)&& table.find('.field25').hasClass(pattern)
    )
    {
       won = 1;    
    } 
    else if
    (
        table.find('.field5').hasClass(pattern) && table.find('.field9').hasClass(pattern) && table.find('.field13').hasClass(pattern)&& table.find('.field17').hasClass(pattern)&& table.find('.field21').hasClass(pattern)
    )
    {
       won = 1;    
    } 
   
    return won;
  }
  
  function reset(table)
   {
    table.find('td').each(function() 
    {
      $(this).removeClass('circle').removeClass('cross');
    });
  }
  