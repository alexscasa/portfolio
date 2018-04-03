 var chess_keeper;
 
 var chessboard;
 
 var white = [],
     black = [];
     
var selected_piece,
    player_turn = 'white';
 
 window.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('chessGame');
        
    var engine = new BABYLON.Engine(canvas, true);
        
    var createScene = function() {
        // create a basic BJS Scene object
        var scene = new BABYLON.Scene(engine);

        // create a FreeCamera
        //  Parameters: x, y, z, scene
        // create an ArcCamera, setting its position to origin
        //  Parameters: alpha, beta, radius, target position, scene
        var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 0, new BABYLON.Vector3(0, 0, 0), scene);

        // Positions the camera overwriting alpha, beta, radius
        // Parameters: x, y, z
        camera.setPosition(new BABYLON.Vector3(0, 10, -10));

        // attach the camera to the canvas
        camera.attachControl(canvas, false );
        
        // Load board
        BABYLON.SceneLoader.ImportMesh("","./assets/models/chessboard/", "board.babylon", scene, function(meshes) {
            chessboard = meshes[0];
            chessboard.name = 'Chessboard';
            spawnPieces('white', chessboard, scene);
            spawnPieces('black', chessboard, scene);
        });
        
        // create a basic light, aiming 0,1,0 - meaning, to the sky
        var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1 , 0), scene);

        // create a built-in "ground" shape; 
        var ground = BABYLON.Mesh.CreateGround('ground1', {height:6, width:6, subdivisions: 2}, scene);
        
        
        chess_keeper = CreateChessboard();
        
        // return the created scene
        return scene;
    }
        
    var scene = createScene();
        
    engine.runRenderLoop(function() {
        scene.render();
    });
    
    window.addEventListener('resize', function() {
        engine.resize();
    });
    
    window.addEventListener("click", function (e) {
        // We try to pick an object
        var pickResult = scene.pick(scene.pointerX, scene.pointerY);
        if(pickResult.pickedPoint){
            if(selected_piece) {
                selected_piece.position = pickResult.pickedPoint;
                checkCollision();
                selected_piece = null;
        
                if(player_turn === 'white') player_turn = 'black';
                else player_turn = 'white';
            } else {
                if(pickResult.pickedMesh && 'Chessboard' != pickResult.pickedMesh.name) {
                    selected_piece = pickResult.pickedMesh;
                }
            }
        }
    });
    
    function checkCollision() {
        if('white' === player_turn) {
            black.forEach(function(cower) {
                if(selected_piece.intersectsMesh(cower)) {
                    cower.dispose();
                }
            });
        } else {
            white.forEach(function(cower) {
                if(selected_piece.intersectsMesh(cower)) {
                    cower.dispose();
                }
            });
        }
    }
    
    function spawnPieces(color, chessboard, scene) {
        
        var color_insert = '';
    
        if('black' === color) {
            color_insert = '.001';
        }
    
        // Load pieces
        var size = chessboard.getBoundingInfo().boundingBox.extendSize;
        square = (size.z * 2) / 9;
    
        //  King
        BABYLON.SceneLoader.ImportMesh("King" + color_insert,"./assets/models/pieces/", "chess.babylon", scene, function(meshes){
            var mesh = meshes[0];
        
            if('white' === color){
                mesh.position = new BABYLON.Vector3(0 - (square * 0.5), 0 + size.y * 1.6, 0 - (square * 3.6));
                white.push(mesh);
            } else {
                mesh.position = new BABYLON.Vector3(0 - (square * 0.5), 0 + size.y * 1.6, 0 + (square * 3.6));
                black.push(mesh);
            }
        });
        
        //  Queen
        BABYLON.SceneLoader.ImportMesh("Queen" + color_insert,"./assets/models/pieces/", "chess.babylon", scene, function(meshes){
            var mesh = meshes[0];
            
            if('white' === color){
                mesh.position = new BABYLON.Vector3(0 + (square * 0.5), 0 + size.y * 1.6, 0 - (square * 3.6));
                white.push(mesh);
            } else {
                mesh.position = new BABYLON.Vector3(0 + (square * 0.5), 0 + size.y * 1.6, 0 + (square * 3.6));
                black.push(mesh);
            }
        });
        
        //  Rook
        BABYLON.SceneLoader.ImportMesh("Rook" + color_insert,"./assets/models/pieces/", "chess.babylon", scene, function(meshes){
            var mesh = meshes[0];
            if('white' === color){
                mesh.position = new BABYLON.Vector3(0 + (square * 3.5), 0 + size.y * 1.6, 0 - (square * 3.6));
                white.push(mesh);
                var temp = mesh.clone(mesh.name);
                temp.position = new BABYLON.Vector3(0 - (square * 3.5), 0 + size.y * 1.6, 0 - (square * 3.6));
                white.push(mesh);
            } else {
                mesh.position = new BABYLON.Vector3(0 + (square * 3.5), 0 + size.y * 1.6, 0 + (square * 3.6));
                black.push(mesh);
                var temp = mesh.clone(mesh.name);
                temp.position = new BABYLON.Vector3(0 - (square * 3.5), 0 + size.y * 1.6, 0 + (square * 3.6)); 
                bblack.push(temp);
            }
        });
        
        //  Bishop
        BABYLON.SceneLoader.ImportMesh("Bishop" + color_insert,"./assets/models/pieces/", "chess.babylon", scene, function(meshes){
            var mesh = meshes[0];
            if('white' === color){
                mesh.position = new BABYLON.Vector3(0 + (square * 2.5), 0 + size.y * 1.6, 0 - (square * 3.6));
                white.push(mesh);
                var temp = mesh.clone(mesh.name);
                temp.position = new BABYLON.Vector3(0 - (square * 2.5), 0 + size.y * 1.6, 0 - (square * 3.6));
                white.push(mesh);
            } else {
                mesh.position = new BABYLON.Vector3(0 + (square * 2.5), 0 + size.y * 1.6, 0 + (square * 3.6));
                black.push(mesh);
                var temp = mesh.clone(mesh.name);
                temp.position = new BABYLON.Vector3(0 - (square * 2.5), 0 + size.y * 1.6, 0 + (square * 3.6));
                black.push(temp);
            }
        });
        
        //  Knight
        BABYLON.SceneLoader.ImportMesh("Knight" + color_insert,"./assets/models/pieces/", "chess.babylon", scene, function(meshes){
            var mesh = meshes[0];
            if('white' === color){
                mesh.position = new BABYLON.Vector3(0 + (square * 1.5), 0 + size.y * 1.6, 0 - (square * 3.6));
                white.push(mesh);
                var temp = mesh.clone(mesh.name);
                temp.position = new BABYLON.Vector3(0 - (square * 1.5), 0 + size.y * 1.6, 0 - (square * 3.6));
                white.push(mesh); 
            } else {
                mesh.position = new BABYLON.Vector3(0 + (square * 1.5), 0 + size.y * 1.6, 0 + (square * 3.6));
                black.push(mesh);
                var temp = mesh.clone(mesh.name);
                temp.position = new BABYLON.Vector3(0 - (square * 1.5), 0 + size.y * 1.6, 0 + (square * 3.6));
                black.push(temp);
            }
        }); 
        
        //  Pawn
        BABYLON.SceneLoader.ImportMesh("Pawn" + color_insert, "./assets/models/pieces/", "chess.babylon", scene, function(meshes) {
            var mesh = meshes[0];
            
            var i = 4;
                
            while(i--) {
                if('white' === color) {
                    mesh.position = new BABYLON.Vector3(0 + (square * (i + 0.5)), 0 + size.y * 1.6, 0 - (square * 2.6));
                    white.push(mesh);
                    mesh = mesh.clone(mesh.name);
                    mesh.position = new BABYLON.Vector3(0 - (square * (i + 0.5)), 0 + size.y * 1.6, 0 - (square * 2.6));
                    white.push(mesh);
                } else {
                    mesh.position = new BABYLON.Vector3(0 + (square * (i + 0.5)), 0 + size.y * 1.6, 0 + (square * 2.6));
                    black.push(mesh);
                    mesh = mesh.clone(mesh.name);
                    mesh.position = new BABYLON.Vector3(0 - (square * (i + 0.5)), 0 + size.y * 1.6, 0 + (square * 2.6));
                }
                
                if(i > 0) mesh = mesh.clone(mesh.name);
            }
        });
    }
    
    function CreateChessboard() {
        var chessboard = createArray(8, 8);
        
        for(var i = 0; i < 8; i++) {
            chessboard[1][i] = 'w_pawn';
            chessboard[6][i] = 'b pawn';
        }
        
        chessboard[0][0] = 'w_rook';
        chessboard[0][1] = 'w_bishop';
        chessboard[0][2] = 'w_knight';
        chessboard[0][3] = 'w_king';
        chessboard[0][4] = 'w_queen';
        chessboard[0][5] = 'w_knight';
        chessboard[0][6] = 'w_bishop';
        chessboard[0][7] = 'w_rook';
        
        chessboard[7][0] = 'b_rook';
        chessboard[7][1] = 'b_bishop';
        chessboard[7][2] = 'b_knight';
        chessboard[7][3] = 'b_king';
        chessboard[7][4] = 'b_queen';
        chessboard[7][5] = 'b_knight';
        chessboard[7][6] = 'b_bishop';
        chessboard[7][7] = 'b_rook';
    }
    
    function createArray(length) {
        var arr = new Array(length || 0),
            i = length;

        if (arguments.length > 1) {
            var args = Array.prototype.slice.call(arguments, 1);
            while(i--) arr[length-1 - i] = createArray.apply(this, args);
        }

        return arr;
    }

});