package com.unac.crudProgramacion.services;

import com.unac.crudProgramacion.dto.UserDTO;

import java.util.List;

public interface UserService {
    UserDTO saveUser(UserDTO userDTO);
    List<UserDTO> getUsers();
    UserDTO getUserById(Integer id);
    void deleteUser(Integer id);
    UserDTO getUserByName(String name);
    UserDTO getUserByNameHsql(String name);
}
