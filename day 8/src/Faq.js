import React from 'react'
import './Faq.css';
import { Link } from 'react-router-dom';

function Faq() {
  return (


<main>

  <section class="faq">
    <h1>Frequently Asked Questions</h1>

    <div class="faq-container">
      <details class="faq-box" open>
        <summary class="faq-header">
         How do I open a new bank account?

        </summary>
        <div class="faq-content">
          <p>
          To open a new bank account, visit your nearest branch or apply online through the bank's official website. You'll need to provide identification and other required documents as per the bank's guidelines.
          </p>
        </div>
      </details>

      <details class="faq-box">
        <summary class="faq-header">
        What types of bank accounts are available?
        </summary>
        <div class="faq-content">
          <p>
          Banks typically offer various types of accounts, including savings accounts, checking accounts,
           fixed deposit accounts, and more. Each account type serves different purposes and offers specific benefits.
          </p>
        </div>
      </details>

      <details class="faq-box">
        <summary class="faq-header">
        How can I access my account online?
        </summary>
        <div class="faq-content">
          <p>
          You can access your account online by registering for online banking. 
          Visit the bank's website and follow the steps to set up an online account.
           You'll usually need your account number and other personal information.
          </p>
        </div>
      </details>

      <details class="faq-box">
        <summary class="faq-header">
        How do I transfer funds between accounts?
        </summary>
        <div class="faq-content">
          <p>
          To transfer funds between accounts, log in to your online banking account. 
          Navigate to the "Transfer Funds" section and follow the prompts to initiate a transfer between your linked accounts.
          </p>
        </div>
      </details>
      
      <details class="faq-box">
        <summary class="faq-header">
        How can I apply for a loan or credit card?
        </summary>
        <div class="faq-content">
          <p>
          To apply for a loan or credit card, visit your bank's branch or apply online through their website.
           You'll need to provide your financial information and meet the bank's eligibility criteria.
          </p>
        </div>
      </details>
    </div>
  </section>

</main>
  )
}
export default Faq