package com.unac.crudProgramacion.controllers;

import com.unac.crudProgramacion.dto.ResponseDTO;
import com.unac.crudProgramacion.dto.UserDTO;
import com.unac.crudProgramacion.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/guardar")
    public ResponseEntity<ResponseDTO> saveUserController(@RequestBody UserDTO obj){
        ResponseDTO responseDTO = new ResponseDTO();
        try{
           UserDTO user = userService.saveUser(obj);
           responseDTO.setStatus(201);
           responseDTO.setMessage("User created successfully");
           responseDTO.setResult(user);
           return ResponseEntity.ok(responseDTO);
        }catch (Exception e){
            responseDTO.setStatus(500);
            responseDTO.setMessage("Ocurrio un error en el servidor");
            return ResponseEntity.status(500).body(responseDTO);
        }
    }

    @GetMapping("/listar")
    public ResponseEntity<List<UserDTO>> getAllUsersController(){
        return ResponseEntity.ok(userService.getUsers());
    }

    @GetMapping("/listar/{id}")
    public ResponseEntity<ResponseDTO> findById(@PathVariable("id") Integer id){
        ResponseDTO responseDTO = new ResponseDTO();
        try{
            UserDTO user = userService.getUserById(id);
            responseDTO.setStatus(200);
            responseDTO.setMessage("User Fetch Successfully");
            responseDTO.setResult(user);
            return ResponseEntity.ok(responseDTO);
        }catch (Exception e){
            responseDTO.setStatus(500);
            responseDTO.setMessage("Ocurrio un error en el servidor");
            return ResponseEntity.status(500).body(responseDTO);
        }
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<ResponseDTO> deleteById(@PathVariable("id") Integer id){
        ResponseDTO responseDTO = new ResponseDTO();
        try{
            userService.deleteUser(id);
            responseDTO.setStatus(200);
            responseDTO.setMessage("User Delete Successfully");
            return ResponseEntity.ok(responseDTO);
        }catch (Exception e){
            responseDTO.setStatus(500);
            responseDTO.setMessage("Ocurrio un error en el servidor");
            return ResponseEntity.status(500).body(responseDTO);
        }
    }

    @GetMapping("/getname/{name}")
    public ResponseEntity<ResponseDTO> findById(@PathVariable("name") String name){
        ResponseDTO responseDTO = new ResponseDTO();
        try{
            UserDTO user = userService.getUserByName(name);
            responseDTO.setStatus(200);
            responseDTO.setMessage("User Fetch Successfully");
            responseDTO.setResult(user);
            return ResponseEntity.ok(responseDTO);
        }catch (Exception e){
            responseDTO.setStatus(500);
            responseDTO.setMessage("Ocurrio un error en el servidor");
            return ResponseEntity.status(500).body(responseDTO);
        }
    }

    @GetMapping("/getname_native/{name}")
    public ResponseEntity<ResponseDTO> findByIdByNative(@PathVariable("name") String name){
        ResponseDTO responseDTO = new ResponseDTO();

        try{
            UserDTO user = userService.getUserByNameHsql(name);
            responseDTO.setStatus(200);
            responseDTO.setMessage("User Fetch Successfully");
            responseDTO.setResult(user);
            return ResponseEntity.ok(responseDTO);
        }catch (Exception e){
            responseDTO.setStatus(500);
            responseDTO.setMessage("Ocurrio un error en el servidor");
            return ResponseEntity.status(500).body(responseDTO);
        }
    }
}
