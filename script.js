function copy(text) {
    var t = document.getElementById('t')
    t.innerHTML = text
    t.select()
    try {
      var successful = document.execCommand('copy')
      var msg = successful ? 'successfully' : 'unsuccessfully'
      console.log('text coppied ' + msg)
    } catch (err) {
      console.log('Unable to copy text')
    }
    t.innerHTML = ''
    // Get the snackbar DIV
    var x = document.getElementById("toast")

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 4000);
  }
  console.log(`                                                                                        
                                  GucciGang                                         
                              ,ooh,yeah,LilPump                                     
                          ,yeah,GucciGang,oohGucci                                  
                  gang,Guccigang,           Guccigan                                
               g,GuccigangGu                  ccigang                               
             ,Guccigang,Gucc                   igang(                               
             Guccigang!)Spend                   tenra                               
             cksonanewch ainMyb    itchlovedoc  ocain                               
             e,oohIfuckabitch,If orgothernameIca n'tb                               
             uyabitchnowedding  ringRathergoandbuyBal                               
            mains  Guccigang,G  uccigang,Guccigang(Gu                               
           ccigang!)Guccigang,G uccigang,Gu ccigang,G                               
          uccigangGuccigang,G   uccigang,Guccigang(Gu                               
         ccigang!)SpendtenracksonanewchainMyb  itchl                                
        ovedo          cocaine,oohIfuckab     itch,I                                
       forgo                      thernam     e,yeah                                
      Ican't                                 buynob                                 
     itchno                                 weddin                                  
    gringR                                  atherg                                  
    oandb                      uyBa        lmains                                   
    ,aye                      Gucci gan   g,Gucc                                    
    igan                      g,Guccigan  gMyle                         ancostmor   
   ethan                      yourrent,  oohYo                        urmamastilll  
   ivein                     atent,yeah Still                       slangi    ngdo  
   peint                     hejets,hu  hMean                     dmygran    dmata  
   kemed                    s,oohNone  ofthis                   shitben     ewtom   
   eFuck                    ingmytea   cher,callittutoryBou   ghtsome     redbo     
    ttom                   s,costhe    llaGsFuckyourairline,fuckyou      rcomp      
    anyB                   itch,yo     urbre   athsm   elllikesom      ecigar       
    ette                  sI'drath      erf   uckabitchfromthep      roject         
    sThey               kicke dmeou         ttheplaneoffaPerco     cetNowL          
     ilPu             mpfly  aprivat         ejetEverybodyscream   ing"fuck         
     WestJ            et!"LilPumpsti                     llsellth    atmethHun      
      nidon            mywristsippi              nonT       echFuc  kali lbitc      
      h,make              herp                   ussy        wetGuc  cigang,G       
       ucciga                                ng,              Gucci    gang         
        ,Gucciga                            ngGu              cciga     ng,G        
           uccigan                          g,Gu              ccigang(Guccig        
 ang        !)Spendten                       rack           sonanewchainMyb         
itchlov    edococaine,oohIfu                  cka         bitch,I    f              
orgothernameIc an'tbuyabitchnoweddin           grin    gRather                      
goan dbuyBalmainsGu    ccigang,Gucciga ng,Guccigang(Guccigan                        
 g!)G  uccigang,G         uccigang,Gu ccigang,GuccigangGu                           
  ccig   ang,Gu         ccigang,Gucc igang (Guccigang!                              
   )Spendtenr           acksonanewc  hain                                           
    Mybitch              lovedoco   cain                                            
      e,o                ohIfuc    kabi                                             
                          tch,If  orgo                                              
                           thernameIc                                               
                             an'tbuy                                                
                               nob `);