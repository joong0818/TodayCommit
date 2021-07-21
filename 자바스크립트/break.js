document.write("<h3> [ continue 문 ] </h3> <hr>")
for(num = 1 ; num <= 10 ; num++ ) {
    if( num % 3 == 0 )
        break
    document.write( num + '\t ')      
}