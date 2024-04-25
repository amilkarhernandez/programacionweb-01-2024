package com.unac.crudProgramacion.dao;

import com.unac.crudProgramacion.entity.UserEntity;
import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserDAO extends JpaRepository<UserEntity, Integer> {

    @Query("SELECT u FROM UserEntity u WHERE u.name = ?1")
    UserEntity findByName(String name);

    @Query(value = "select * from users where name = ?1", nativeQuery = true)
    List<Object[]> findByUserName(String name);
}
