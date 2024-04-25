package com.unac.crudProgramacion.services.impl;

import com.unac.crudProgramacion.dao.UserDAO;
import com.unac.crudProgramacion.dto.UserDTO;
import com.unac.crudProgramacion.entity.UserEntity;
import com.unac.crudProgramacion.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDAO userDAO;
    @Override
    public UserDTO saveUser(UserDTO userDTO) {
        UserEntity userEntity = UserEntity.builder()
                .idUser(userDTO.getIdUser())
                .name(userDTO.getName())
                .email(userDTO.getEmail())
                .birthdate(userDTO.getBirthdate())
                .build();

        UserEntity savedUser = userDAO.save(userEntity);
        return UserDTO.builder()
                .idUser(savedUser.getIdUser())
                .name(savedUser.getName())
                .email(savedUser.getEmail())
                .birthdate(savedUser.getBirthdate())
                .build();
    }

    @Override
    public List<UserDTO> getUsers() {
        List<UserEntity> userEntities = userDAO.findAll();
        return userEntities.stream()
                .map(userEntity -> UserDTO.builder()
                        .idUser(userEntity.getIdUser())
                        .name(userEntity.getName())
                        .email(userEntity.getEmail())
                        .birthdate(userEntity.getBirthdate())
                        .build())
                .toList();
    }

    @Override
    public UserDTO getUserById(Integer id) {
        Optional<UserEntity> userEntity = userDAO.findById(id);
        return UserDTO.builder()
                .idUser(userEntity.get().getIdUser())
                .name(userEntity.get().getName())
                .email(userEntity.get().getEmail())
                .birthdate(userEntity.get().getBirthdate())
                .build();
    }

    @Override
    public void deleteUser(Integer id) {
        userDAO.deleteById(id);
    }

    @Override
    public UserDTO getUserByName(String name) {
        UserEntity userEntity = userDAO.findByName(name);
        return UserDTO.builder()
                .name(userEntity.getName())
                .email(userEntity.getEmail())
                .birthdate(userEntity.getBirthdate())
                .build();
    }

    @Override
    public UserDTO getUserByNameHsql(String name) {
        List<Object[]> users = userDAO.findByUserName(name);
        UserDTO userDTO = new UserDTO();
        if (!users.isEmpty()) {
            userDTO.setIdUser((Integer) users.get(0)[0]);
            userDTO.setBirthdate((Date) users.get(0)[1]);
            userDTO.setEmail((String) users.get(0)[2]);
            userDTO.setName((String) users.get(0)[3]);
        }
        return userDTO;
    }
}
