package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.iamneo.security.entity.Bank;
public interface BankRepository extends JpaRepository<Bank,Integer>{
}
