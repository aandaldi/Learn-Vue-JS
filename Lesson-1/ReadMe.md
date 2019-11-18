# INSTALATION

  - using CDN 
   '<script src="https://unpkg.com/vue"></script>'

### Contoh
  ##### cara konvensional
```<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>HELLO VUE</title>
        <script src="https://unpkg.com/vue"></script>
        <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    </head>
    <body>
        <h2>Belajar Vue</h2>
        <input type="text" id="input">
        <div id="textValue">Value dari input text adalah : Hellow World</div>
        <script>
            document.getElementById("input").value = "Hello World";
            window.onkeyup = keyup;
            var inputTextValue;
            
            function keyup(e){
                inputTextValue = e.target.value;
                jQuery('#textValue').text('Value dari input adalah: ' + inputTextValue);
            }
        </script>
    </body>
</html>
```

  ##### cara Vue
```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>HELLO VUE</title>
        <script src="https://unpkg.com/vue"></script>
        <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    </head>
    <body>
        <h2>Belajar Vue</h2>
        <div id="root">
            <input type="text" id="input" v-model="message">
            <p>Value dari input text adalah: {{message}}</p>
        </div>
        <script>
            new Vue({
                el: '#root',
                data:{
                    message: 'Hello Vue'
                }
            })
        </script>
    </body>
</html>
```