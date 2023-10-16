package com.iamneo.security.controller;
import com.iamneo.security.entity.Bankaccount;

import com.iamneo.security.service.BankaccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/bankaccounts")
public class BankaccountController {

    @Autowired
    private BankaccountService bankaccountService;

    @GetMapping
    public String listBankaccounts(Model model) {
        List<Bankaccount> bankaccounts = bankaccountService.getAllBankaccounts();
        model.addAttribute("bankaccounts", bankaccounts);
        return "bankaccount/list"; // Assuming you have a view named "list" to display the bank accounts.
    }

    @GetMapping("/cre")
    public String createBankaccountForm(Model model) {
        model.addAttribute("bankaccount", new Bankaccount());
        return "bankaccount/create"; // Assuming you have a view named "create" for creating a new bank account.
    }

    @PostMapping("/create")
    public String createBankaccount(@ModelAttribute Bankaccount bankaccount) {
        bankaccountService.saveBankaccount(bankaccount);
        return "redirect:/bankaccounts";
    }

    
}
