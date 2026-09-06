const examData = [
    {
        id: 1,
        topic: "Formation / Acceptance by Shipment",
        fp: "The seller was an importer of arts and crafts products from Mediterranean countries, selling mainly to large department stores and import shops. To keep his sales force down to a minimum, the seller did most of his selling by sending catalogs describing products and prices to prospective customers and taking orders by mail on forms provided with the catalogs. The phrase '10 percent discount on COD orders only' appeared on the order form and on each page of the catalog. After receiving one of the seller's catalogs, the buyer decided to order 1,000 Greek coffeepots for sale in her import shop. On April 25, she typed the following across the seller's order form: 'Send immediately 1,000 Greek coffeepots (Catalog #6047) at 10 percent discount. Payment within 10 days of receipt and acceptance.' The seller received the order on April 27. On April 28, the seller shipped 1,000 Greek coffeepots to the buyer, who received and accepted them on May 2. On April 29, the seller wrote to the buyer, 'I am shipping pursuant to your request and will expect payment within 10 days. Since discounts apply only to COD shipments, you are herewith billed at full price.' The buyer received the letter and enclosed bill on May 3. On May 4, the buyer sent the seller a check in payment of the amount billed, less 10 percent.",
        q: "When was a contract for sale of the coffeepots formed?",
        opts: [
            "On April 25, when the buyer sent the order to the seller.",
            "On April 27, when the seller received the order from the buyer.",
            "On April 28, when the seller shipped the coffeepots to the buyer.",
            "On May 2, when the buyer received the shipment of coffeepots."
        ],
        ans: 2,
        exp: "A contract is formed upon acceptance of an offer. Since the buyer's order identified the subject of the transaction, specified the quantity, set forth price and terms, and called for shipment, it conferred upon the seller the power to create a contract by accepting and was, therefore, an offer. Under UCC §2-206(1)(b), an order to purchase goods for prompt shipment calls for acceptance either by prompt shipment or prompt promise to ship. Since the seller shipped (i.e., accepted the offer) on April 28, the contract was formed on that date.\n\nCatalogs of the kind used by the seller are mere invitations to negotiate because they are sent to a large number of buyers and do not refer to specific items for sale but rather to types of items. For that reason, the buyer's order could not constitute an acceptance. A and B are therefore incorrect. D is incorrect because the contract had already been formed when the goods were shipped."
    },
    {
        id: 2,
        topic: "Terms / Disclaiming Implied Warranties",
        fp: "After lengthy negotiations, the plaintiff purchased a car from the defendant, a car dealer. The plaintiff was driving it the following day when the brakes failed due to a defect that existed at the time the defendant delivered the car to the plaintiff. As a result, the car collided with a pole and was damaged. The plaintiff asserted a claim against the defendant for damages resulting from breach of the implied warranty of merchantability.",
        q: "Which one of the following additional facts, if it were the only one true, would be most likely to result in a judgment for the defendant?",
        opts: [
            "At the time of the sale, both the defendant and the plaintiff signed a document stating that the car was being sold 'as is.'",
            "The car that the plaintiff bought from the defendant was a used car.",
            "The defect that caused the brakes to fail could not have been discovered by reasonable inspection prior to the sale.",
            "The plaintiff purchased the car in reliance on the advice of a mechanic whom she hired to inspect it prior to making the purchase."
        ],
        ans: 0,
        exp: "Under UCC §2-314, an implied warranty of merchantability accompanies every sale by a merchant unless disclaimed by unequivocal language. UCC §2-316(3)(a) specifically provides that the phrase 'as is' may be used to disclaim the warranty.\n\nB is incorrect because the implied warranty may accompany the sale of a used product as well as a new one. C is incorrect because liability for breach of warranty does not depend on negligence or fault by the seller. Under UCC §2-315, an implied warranty that the product is fit for the buyer's particular purpose accompanies a sale only if the seller knows the buyer's purpose and knows also that the buyer is relying on the seller's judgment in furnishing a product to suit that purpose. D is incorrect, however, because the implied warranty of merchantability does not require reliance on the seller's judgment."
    },
    {
        id: 3,
        topic: "Formation / Implied-in-Fact Contract",
        fp: "The defendant, who broke his leg falling from a ladder, was treated by a doctor. At the time treatment began, the defendant explained that he was short of cash, but that his treatment was covered by group insurance. The doctor agreed to wait for his fee until the insurance company made payment and offered to bill the insurance company directly for the services that he rendered to the defendant. The defendant provided the doctor with claim forms from the company that insured the defendant's union. The doctor filled out the form, had the defendant sign a portion of it authorizing the insurance company to make payment directly to the doctor, and submitted the form to the company. Because of an error by employees of the insurance company, the payment was sent to the defendant, who failed to make any payment at all to the doctor.",
        q: "If the doctor asserts a claim against the defendant to recover the amount of the unpaid bill, will the court find in the doctor's favor?",
        opts: [
            "Yes, because he is a creditor third-party beneficiary of the group insurance policy that covered the defendant.",
            "Yes, because the defendant impliedly promised to pay the doctor for his services.",
            "No, because the doctor agreed to accept payment from the insurance company.",
            "No, because the doctor billed the insurance company directly."
        ],
        ans: 1,
        exp: "In the absence of an agreement to the contrary, one who seeks the services of another, knowing that the other expects to be paid for those services, impliedly promises to pay for the services by availing himself or herself of them. Although the doctor agreed to wait for payment and to bill the defendant's insurance company directly, nothing in the conversation between the doctor and the defendant indicates that the doctor was willing to look solely to the insurance company for payment.\n\nIf the benefit that a contract confers on a non-contracting party was intended to satisfy a preexisting obligation owed by one of the contracting parties, the person on whom the benefit is conferred is called a creditor third-party beneficiary. Since the defendant's debt to the doctor did not exist at the time the insurance contract was made, the doctor could not have been a creditor beneficiary. A is therefore incorrect. C and D are incorrect because, as noted above, nothing in the conversation between the doctor and the defendant indicates that the doctor agreed to look solely to the insurance company for payment."
    },
    {
        id: 4,
        topic: "Remedies / Material Breach and Expectation Damages",
        fp: "A landowner wanted to open an amusement park on a parcel of real estate that he owned. After negotiation, the landowner hired a contractor to build a rollercoaster and several other amusement devices on the land according to specifications furnished by the landowner. The landowner and the contractor entered into a written contract by which the contractor agreed to begin construction on August 1, to be finished with everything but the rollercoaster by November 1, and to complete construction of the rollercoaster by December 15. The contract price was $150,000, to be paid as follows: $50,000 on August 1, $50,000 upon completion of everything but the rollercoaster, and the balance of $50,000 upon completion of the rollercoaster. The contractor began work on August 1, after receiving $50,000 from the landowner. By November 1, the contractor completed construction of everything but the rollercoaster in accordance with the specifications. On November 1, the contractor demanded the landowner pay him $50,000, but the landowner refused to do so.",
        q: "Which of the following statements is most correct concerning the rights of the contractor?",
        opts: [
            "The contractor is entitled to damages limited to the sum of $50,000.",
            "The contractor is entitled to damages in the sum of $100,000.",
            "The contractor may refuse to perform any further work without incurring liability for breach of contract.",
            "The contractor may not sue the landowner for breach of contract until he completes construction of the rollercoaster."
        ],
        ans: 2,
        exp: "When either party to a contract breaches it, the other party is excused from further performance. Since the landowner breached by refusing to make payment as required, the contractor may refuse to perform any further work.\n\nIn addition, the non-breaching party is entitled to damages consisting of the losses that he or she sustained as a result of the breach. This may include profits that he or she would have earned if the breach had not occurred. D is therefore incorrect. Ordinarily, lost profits are measured by the balance of the contract price less whatever it would have cost the builder to complete performance. Since the amounts specified in A and B are not necessarily based on this measure, A and B are incorrect."
    },
    {
        id: 5,
        topic: "Excuses / Illegality vs. Frustration of Purpose",
        fp: "After State A legalized the sale of marijuana, a man decided he wanted to get into the marijuana business and open a dispensary. The man entered into a one-year lease agreement for a small store in a local strip mall. He intended to sell marijuana and marijuana-related products in the store. Two weeks before the lease was set to begin, a new state administration outlawed the sale of marijuana in the state. The man called the store landlord and told him that he was canceling the lease agreement. The landlord sued.",
        q: "Should the court rule in the landlord's favor?",
        opts: [
            "Yes, because there was a valid contract between the parties.",
            "Yes, because marijuana sales were legal at the time of contracting.",
            "No, because marijuana sales were now illegal.",
            "No, because the contract is void under the doctrine of frustration of purpose."
        ],
        ans: 0,
        exp: "Although the man's intended use of the store for marijuana sales is now illegal, this does not change the fact that the lease was simply to rent the space for a year. The man could still use the space for something, although he might not be able to sell his planned product. Under the circumstances, there's no reason to excuse the man's performance of the contract.\n\nB, C, and D are thus incorrect."
    },
    {
        id: 6,
        topic: "Defenses / Statute of Frauds (Receipt and Acceptance)",
        fp: "A concert venue called a speaker company and ordered new speakers. The company told the venue that it had a small staff and generally could only make one speaker at a time, although the speakers were standard and were not made to any individual specifications. The company orally agreed to pay $100,000 for four speakers, with a payment of $25,000 due 60 days after each speaker was delivered. Usually, the company's speakers sold for $28,000 apiece, but the company gave the venue a discount since it was ordering four at the same time. It cost the company $15,000 to make each speaker. Because the company had hired extra staff for the holidays, it was able to deliver two speakers on January 1. On February 15, the company delivered another speaker. The venue refused to accept delivery of the third speaker and refused to pay for the first two. The company sued the venue.",
        q: "If the company is successful, what is the most appropriate amount of damages?",
        opts: [
            "$30,000.",
            "$50,000.",
            "$56,000.",
            "$100,000."
        ],
        ans: 1,
        exp: "Under UCC §2-201, a contract for the sale of goods for the price of $500 or more is not enforceable unless there is a writing signed by the party against whom enforcement is sought. However, under UCC §2-201(3)(c), an oral contract is enforceable with respect to goods that have been received and accepted. Here, since the venue accepted the first two speakers, the company can recover $50,000 according to the terms of the oral contract.\n\nTherefore, A, C, and D are incorrect."
    },
    {
        id: 7,
        topic: "Formation / Missing Essential Terms (Real Estate)",
        fp: "On March 22, by a written memorandum signed by both parties, the seller agreed to sell and the buyer agreed to buy a described parcel of realty. The buyer and seller were both in the business of buying and selling real estate. The contract called for closing of title on May 30 and fixed all other terms, but it did not indicate the price to be paid. On May 30, the buyer tendered $60,000 cash, but the seller refused to convey the realty. The buyer subsequently instituted an action against the seller for specific performance of the contract and offered evidence that $60,000 was the fair market value of the realty both on March 22 and on May 30. In defense, the seller asserted that the memorandum failed to satisfy the requirements of the Statute of Frauds.",
        q: "Should the court rule in the seller's favor?",
        opts: [
            "No, because the buyer and the seller are both in the business of buying and selling real estate.",
            "No, because under the UCC, a contract that is silent as to price is presumed to call for payment of fair market value.",
            "Yes, because the written contract did not fix the price to be paid.",
            "Yes, because there was no indication the seller acted in bad faith."
        ],
        ans: 2,
        exp: "Under the Statute of Frauds, a contract for the sale of any interest in real estate must be in writing, and the writing must contain all the essential terms. The price is an essential term in a contract for the sale of realty, since the court will be unable to fashion a remedy without it.\n\nAlthough UCC §2-305(1) makes special provision for contracts between merchants, providing that a contract silent as to price is presumed to be for a reasonable price, these provisions apply only to the sale of goods and not to the sale of realty. A and B are therefore incorrect. D is incorrect because bad faith is not at issue."
    },
    {
        id: 8,
        topic: "Consideration / Past Consideration",
        fp: "A rescuer saved the life of a man's wife, who subsequently promised to change her will to leave $500 to the rescuer. The wife later died intestate, however, survived only by her husband. After the wife's death, the husband executed a document that read as follows: 'In consideration of my wife's promise to leave the rescuer $500, of the rescuer's saving my wife's life, and of the rescuer's promise not to assert any claim against the estate of my wife, I hereby promise to pay the rescuer the sum of $500.' The husband died two months after signing the above agreement. The rescuer submitted a claim for $500 to the administrator of the husband's estate, but the administrator denied the claim.",
        q: "Is the fact that the rescuer saved the wife's life sufficient consideration for the husband's promise to pay him $500?",
        opts: [
            "Yes, because it is recited as consideration in the document that the husband signed.",
            "Yes, because it materially benefited the husband.",
            "No, because the husband did not ask the rescuer to save his wife.",
            "No, because the value of the service rendered by the rescuer to the husband was speculative."
        ],
        ans: 2,
        exp: "Consideration requires a bargained-for exchange. Since the husband did not ask the rescuer to save his wife, the rescuer's doing so was neither bargained for nor given in exchange for the husband's promise.\n\nThe fact that a promisor calls something 'consideration' for his or her promise does not make it so. A is incorrect because the service was not given in exchange for the promise. Even though the service rendered by the rescuer may have materially benefited the husband, it is not consideration for the husband's promise because it was not performed in exchange for the promise. B is therefore incorrect. A service given in return for a promise, however, would be consideration for the promise even if the value of the service cannot be specified. D is therefore incorrect."
    },
    {
        id: 9,
        topic: "Formation / Revocation of Unilateral Offer",
        fp: "A man saw a vintage car that he wanted to buy for his wife's birthday. He didn't know if it was for sale or not, but he stuck a note on the car's windshield saying that he would buy it if the owner delivered the car to the man's house by April 20 so he could give it to his wife on her birthday on April 21. The note also contained the man's address and contact information and was signed by the man. The car owner saw the note and mailed a signed letter to the man saying that he accepted the offer. The letter was lost in the mail and did not arrive at the man's house until April 19. However, because the man hadn't heard anything from the car owner since he left the note, he had already bought his wife a necklace as a present and no longer wanted the car. He called the owner immediately and told him that he did not want the car anymore. The owner said that the man could not now orally revoke his offer. On April 20, the car owner arrived at the man's house with the car. The car owner sued the man for breach of contract.",
        q: "Should the court rule in the car owner's favor?",
        opts: [
            "Yes, because the owner's letter created a binding contract upon dispatch.",
            "Yes, because the owner's letter created a binding contract upon receipt.",
            "No, because the owner did not give the man notice of acceptance.",
            "No, because the man informed the owner he did not want the car on April 19."
        ],
        ans: 3,
        exp: "The man's note was an offer for a unilateral contract that could only be accepted by performance. Because the man told the owner that he didn't want the car anymore before the owner started performance by delivering the car on the required date, the offer was revoked and no contract was created. A, B, and C are incorrect because the man's offer could only be accepted by performance."
    },
    {
        id: 10,
        topic: "Performance / Perfect Tender Rule",
        fp: "In preparation for an annual convention that was to be held on January 9, the buyer ordered 500 ballpoint pens from the seller at a total price of $285, paying for them in advance. Because the pens were to be given to conventioneers as souvenirs, they were to be imprinted with the name and slogan of the association and were to be delivered to the buyer on or before January 8. The seller and the buyer entered into a written contract containing the above terms on November 16. The seller tendered 475 ballpoint pens to the buyer on January 8.",
        q: "Which of the following correctly states the legal relationship between the buyer and the seller on January 8?",
        opts: [
            "The buyer must accept the tendered delivery of 475 pens but may successfully sue for damages resulting from breach of contract.",
            "The buyer may elect to accept the tendered delivery of 475 pens but may not successfully sue for breach of contract if it does so.",
            "The buyer may reject the tendered delivery of 475 pens but may successfully sue only for the return of its advance payment if it does so.",
            "The buyer may reject the tendered delivery of 475 pens and may successfully sue for the return of its advance payment and for damages resulting from breach of contract if it does so."
        ],
        ans: 3,
        exp: "The seller's obligation under a contract of sale is to deliver goods that conform in every way to the terms of the contract. Since the contract called for delivery of 500 pens, delivery of anything less is a breach. Since the seller failed to perform as promised, the buyer is entitled to the return of all money already paid. In addition, since the seller breached the contract, the buyer is entitled to damages resulting from the breach.\n\nA is incorrect because the buyer is not required to accept a nonconforming tender. If a buyer chooses to accept a nonconforming tender, he or she must pay the contracted price but is entitled to sue for damages resulting from the seller's defective performance, so long as he or she notifies the seller of his or her intention to do so. B is therefore incorrect. On the other hand, if the tender does not conform to the seller's promise, the buyer may reject it. Having done so, the buyer is entitled to damages that resulted from the seller's breach. C is incorrect because return of the buyer's advance payment may not be sufficient to compensate the buyer for other damages that it sustained. (Note: Damages are traditionally measured by the difference between the contract price and the 'cover price' or the fair market value of the goods involved.)"
    },
    {
        id: 11,
        topic: "Formation / Solicitations vs Offers",
        fp: "A man texted his friend, 'I really want to sell my motorcycle. I would consider $2,000 for it.' His friend immediately texted back, 'I accept! I'll give you a check immediately!' The friend then went to his bank and had a cashier's check for $2,000 prepared. He also went out and bought a motorcycle helmet, motorcycle leathers, and a shed in which to store his new motorcycle. The next day when the friend showed up for the motorcycle, the man refused to give it to him.",
        q: "Is the friend entitled to specific performance?",
        opts: [
            "Yes, because he accepted the man's offer.",
            "Yes, because he detrimentally relied on the man's offer.",
            "No, because the man merely made a statement of future intention.",
            "No, because the man was merely soliciting bids."
        ],
        ans: 3,
        exp: "A party who wishes to make a contract may make statements that are not offers but rather solicitations of bids. These bids are the basis of preliminary negotiations and cannot be accepted. Here, the man saying 'I would consider' shows his statement to be a mere solicitation of bids, and not a true offer. Consequently, the friend cannot accept and no contract is formed. This makes A incorrect. B is incorrect because detrimental reliance usually refers to the other party beginning performance or making costly preparations in anticipation of a contract. Here, the friend buying motorcycle equipment and a shed is unlikely to rise to this level. C is incorrect because a statement of future intention is an announcement by a person that he or she intends to contract in the future. The man's statement that he wanted to sell his motorcycle did not show that he necessarily intended to make any contract in the future."
    },
    {
        id: 12,
        topic: "Performance / Implied Duty of Good Faith (Prevention)",
        fp: "On June 1, the plaintiff, a licensed real estate broker, entered into a written contract with the defendant. According to the contract, the plaintiff was given the exclusive right to sell the defendant's home at a price of $100,000 for a period of three months. The defendant agreed to pay the plaintiff a 7 percent commission 'upon transfer of title.' On July 1, as a result of the plaintiff's efforts, a buyer agreed to purchase the defendant's home at a price of $100,000. According to the terms of the contract, the defendant was to deliver evidence of clear title prior to July 20. At the defendant's request, an abstract company researched the chain of title and delivered an abstract to the defendant on July 15 showing clear title. The defendant did not deliver the abstract to the buyer, however, because his neighbor was unhappy with the prospect of having the buyer move into the defendant's home and asked the defendant to try to get out of the deal. On July 21, the buyer notified the defendant that he would not go through with the transaction because of the defendant's failure to deliver the abstract of title as agreed. The plaintiff sued the defendant for a 7 percent commission based on the defendant's contract with the buyer.",
        q: "Which of the following would be the plaintiff's most effective argument in support of her claim?",
        opts: [
            "The plaintiff delivered a buyer 'ready, willing, and able' to purchase the defendant's property.",
            "But for a willful breach by the defendant, the buyer would have taken title to the realty.",
            "The defendant and the buyer entered into a contract for the sale of the defendant's realty as a result of the plaintiff's efforts.",
            "The defendant's refusal to deliver the abstract frustrated the purpose of the contract between the defendant and the plaintiff."
        ],
        ans: 1,
        exp: "Under the brokerage contract, transfer of title was a condition precedent to the defendant's obligation to pay a commission. There is always an implied agreement, however, that a party will not willfully prevent the performance of a condition to his or her obligation. If transfer of title was prevented by the defendant's willful breach of his contract with the buyer, the defendant thus violated the implied agreement with the plaintiff and may be held liable for damages (i.e., the unpaid commission) that resulted.\n\nAlthough real estate brokerage contracts frequently require payment of the commission when the broker procures a ready, willing, and able buyer, A and C are incorrect because this contract was conditioned on the transfer of title. 'Frustration of purpose' may excuse performance of a contract where an unforeseen event destroys the underlying reasons for performing the contract. D is incorrect because the doctrine of frustration of purpose never results in liability but rather excuses a party's failure to perform."
    },
    {
        id: 13,
        topic: "Discharge / Executory Accord",
        fp: "The seller and the buyer entered into a written contract for the sale of 500 bicycles at a total price of $50,000. The contract required delivery by the seller prior to June 1 and payment by the buyer within 30 days after delivery. On May 15, the seller delivered the bicycles to the buyer, who received and accepted them. On May 21, because the seller was having cash flow problems, he telephoned the buyer, asking whether the buyer could pay for the bicycles immediately. The buyer said that he would pay by May 25 if the seller was willing to accept $45,000 in cash as payment in full. The seller agreed, but by June 20, the buyer had made no payment at all. The seller subsequently instituted an action against the buyer for $50,000. The buyer admitted the existence of the contract, the delivery of the bicycles, and his non-payment; but he asserted that he was liable for only $45,000 because of the agreement that he made with the seller on May 21.",
        q: "Is the buyer's assertion correct?",
        opts: [
            "No, because the buyer did not pay $45,000 by May 25.",
            "No, because a promise to perform a preexisting obligation is not valuable consideration.",
            "Yes, because there has been a valid novation.",
            "Yes, because there has been a valid agreement of accord."
        ],
        ans: 0,
        exp: "An accord is a new obligation intended to take the place of an existing one. To be enforceable, it must be supported by consideration. To discharge the original obligation, it must actually be performed. Performance of the new obligation is known as 'satisfaction,' and it is the satisfaction rather than the accord that discharges a contractual obligation. The agreement of May 21 constituted an accord, but since the buyer did not pay $45,000 in cash by May 25, there has been no satisfaction and thus no discharge of his obligation to pay $50,000 as originally agreed.\n\nWhile a promise to perform a preexisting obligation is not valuable consideration, B is incorrect because the buyer's original contractual obligation was to pay before June 14, and his May 21 promise was to pay by May 25. A novation is an agreement to substitute a third party for one of the parties to the contract. C is therefore incorrect. D is incorrect because accord without satisfaction does not work to discharge contractual obligations."
    },
    {
        id: 14,
        topic: "Formation / Mailbox Rule",
        fp: "A publisher mailed an offer to publish a writer's first book for $25,000. The writer immediately mailed back her acceptance. The acceptance was properly addressed with the correct amount of postage. However, the post office lost the letter and the publisher never received it.",
        q: "Is there a contract?",
        opts: [
            "No, because the post office lost the letter.",
            "No, because the publisher was excused from performance since he did not receive the letter.",
            "Yes, because the acceptance was properly addressed with the correct amount of postage.",
            "Yes, because the writer mailed her acceptance."
        ],
        ans: 2,
        exp: "Under the mailbox rule, an acceptance is effective when sent. However, if the offeror never receives the acceptance, the acceptance has to be properly dispatched in order to create a contract. Here, since the facts state that the writer put the correct address and proper postage on the acceptance, the mailbox rule applies. This makes A and B incorrect.\n\nD is incorrect because even if the writer mailed her acceptance, the mailbox rule would not apply if the acceptance was not properly dispatched (i.e., she put the wrong address on it)."
    },
    {
        id: 15,
        topic: "Consideration / Past Consideration",
        fp: "A law school dean hired a new professor to teach professional responsibility. Law students in the state were required to take an exam on professional responsibility and the school's students' scores had been low for several decades. When the latest student test scores came back, the law school's students had the top scores in the state. The dean was so pleased that he made a big deal about the rise in scores on social media and to local newspapers, which resulted in the dean receiving a salary raise. The dean then went to the professor and told him that he would give the professor a $5,000 bonus at the end of the year. The professor was so pleased with the dean's promise that he started working extra hard. At the end of the year, the professor asked the dean about his bonus. The dean said that a recent state budget rule made the giving of bonuses impossible. The professor sued, arguing that he was entitled to his $5,000 bonus.",
        q: "Should the court rule in the professor's favor?",
        opts: [
            "Yes, because the professor started working extra hard after receiving the bonus.",
            "Yes, because the dean received a financial benefit from the high test scores.",
            "No, because the dean's promise was not supported by consideration.",
            "No, because the dean's promise was illusory."
        ],
        ans: 2,
        exp: "A promise has to be supported by consideration to be enforceable. Consideration is a bargained-for exchange or legal detriment, which means that the promise must agree to do something that he or she was not obligated to do or refrain from something he or she was legally permitted to do. Importantly, past consideration is no consideration at all. Here, the professor already did his job teaching professional responsibility. Consequently, there was no consideration and the bonus promise is unenforceable.\n\nA is incorrect because the professor had the legal duty to do the job he was hired. Working 'extra hard' in that job would not count as sufficient consideration to support the dean's bonus promise. Additionally, the professor had already done the work the bonus was based on. B is incorrect because the fact that the dean received a financial benefit does not change the analysis. D is incorrect because an illusory promise is a statement where the speaker doesn't actually promise to do anything. Here, the dean clearly promised to give the professor a bonus."
    },
    {
        id: 16,
        topic: "UCC Definitions / Merchants",
        fp: "The Uniform Commercial Code defines merchants differently based on their specific knowledge and standard business practices. Analyze the following scenarios to determine merchant status.",
        q: "In a transaction involving the sale of a bicycle, which of the following persons is NOT a merchant under the UCC?",
        opts: [
            "The owner of a bicycle store who sells her own personal bicycle after using it for 14 months by placing an advertisement under the heading 'Used Merchandise' in the classified section of the newspaper.",
            "The owner of an automobile dealership who buys a bicycle for use by employees of the dealership's parts department in making deliveries.",
            "A bicycle mechanic who buys a new bicycle from a retail store to give as a gift to his nephew.",
            "The owner of a messenger service who employs a full-time bicycle mechanic to maintain bicycles used in her business, and who sends the mechanic to inspect a new bicycle before buying it for use by messengers in her employ."
        ],
        ans: 1,
        exp: "UCC §2-104 defines a merchant as a person who deals in goods of the kind involved in the transaction, one who by his or her occupation holds himself or herself out as having knowledge peculiar to the goods involved in the transaction, one to whom such knowledge may be attributed by his or her employment, or a person who by his or her occupation holds himself or herself out as having such knowledge. Since the buyer in B is not in the bicycle business, does not hold himself or herself out as having special knowledge of bicycles, and does not employ a person who does so, he or she is not a merchant under UCC §2-104.\n\nThe seller in A is in the bicycle business and therefore deals in bicycles. The buyer in C is a bicycle mechanic, and as such holds himself out as having special knowledge of bicycles. Special knowledge of bicycles may be attributed to the buyer in D because she employed a bicycle mechanic to assist in making the purchase."
    },
    {
        id: 17,
        topic: "Excuses / Prospective Inability to Perform",
        fp: "The defendant was the owner and operator of a summer resort located at a high elevation in the northern part of the country. Because the hotel was open only during the summer, the defendant usually employed a single resident caretaker to live and work at the hotel during the winter months. On August 1, after applying for the job of winter caretaker, the plaintiff entered into a valid written contract with the defendant. According to its terms, the plaintiff was to take up residence at the hotel on October 1, and to remain in residence until the following April 1, at which time the defendant was to pay him $10,000. During the plaintiff's period of residence, he was to receive free room and board and to perform certain maintenance tasks. On August 15, the plaintiff enlisted in the United States Navy, his period of service to begin on September 25 and to continue for three years. Mention of the plaintiff's enlistment appeared in the 'Hometown Gossip' section of a local newspaper and was seen by executives of the defendant. The defendant immediately began seeking another winter caretaker and hired another caretaker on September 15, entering into a valid written contract with him on that date that contained terms identical to those in the contract with the plaintiff. On September 20, the plaintiff failed the physical examination performed by Navy physicians and was rejected for naval service. The plaintiff reported for work at the hotel on October 1 but was advised that his services were not required. The plaintiff asserted a claim against the defendant for damages resulting from breach of contract.",
        q: "Is the plaintiff entitled to damages?",
        opts: [
            "Yes, because he was ready, willing, and able to perform as agreed on October 1.",
            "Yes, because he never informed the defendant that he would not be reporting to work as agreed.",
            "No, because the plaintiff's enlistment was an anticipatory repudiation of his contract with the defendant.",
            "No, because the defendant hired another caretaker in reliance on the reasonable belief that the plaintiff would be unable to perform as agreed."
        ],
        ans: 3,
        exp: "A prospective inability to perform occurs when a party to a contract has, by his or her own conduct, divested himself or herself of the ability to perform. A party who justifiably relies to its detriment on another party's prospective inability to perform is discharged from its obligations under the contract. Since the hotel executives learned that the plaintiff had enlisted, and since this would make it impossible for the plaintiff to perform, they were justified in hiring another caretaker. Since the hotel ordinarily employed only one winter caretaker, hiring the new caretaker was sufficiently detrimental to excuse it from performing its contract with the plaintiff.\n\nA and B are incorrect because the hotel justifiably relied to its detriment on the plaintiff's prospective inability to perform when it hired the new caretaker upon learning of the plaintiff's enlistment. An anticipatory repudiation occurs when a party refuses to perform even though he or she is able to do so. C is incorrect because the plaintiff never refused to perform."
    },
    {
        id: 18,
        topic: "Remedies / Impossibility and Restitution",
        fp: "On May 1, the defendant hired the plaintiff to re-shingle the roof of his house at an agreed price of $5,000, to be paid within 10 days after completion, and with all work to be completed by July 1. The plaintiff began work on May 2 and worked diligently until May 15. At that time, the plaintiff had performed services that were worth $1,500, and which increased the value of the defendant's house by $1,500. On May 16, through no fault of either party, the house caught fire and was totally destroyed. Although the proceeds that the defendant received from his fire insurance policy were sufficient to cover the cost of building a new house, the defendant decided to sell the property instead. The plaintiff demanded payment under the contract, but the defendant refused to pay.",
        q: "If the plaintiff asserts a claim for payment against the defendant, how much should the court award to the plaintiff?",
        opts: [
            "$5,000, because it was the price on which the plaintiff and the defendant agreed.",
            "$1,500, because it was the value of the plaintiff's work.",
            "$0, because the defendant derived no benefit from the plaintiff's work.",
            "$5,000, because the defendant could have rebuilt the house with the proceeds from the fire insurance policy."
        ],
        ans: 1,
        exp: "Ordinarily, when unforeseeable circumstances make performance impossible, that performance is excused. When this occurs after performance has begun, the party who has performed is not entitled to contract remedies, since there has been no breach by the other party. In construction contracts, if the contractor is hired to repair an existing building rather than build a new one, the contractor is entitled to recover in restitution for the reasonable value of the work done prior to the destruction of the building. In contracts involving building a new building, contractors are not permitted any recovery in restitution for the work that was destroyed, because no benefit was conferred on the owner.\n\nA and D are incorrect because the plaintiff did not fully perform, such performance having become impossible without fault by either party."
    },
    {
        id: 19,
        topic: "Third Parties / Assignment of Rights",
        fp: "At the age of 14, the plaintiff designed a program for a computer game. He demonstrated the program to the defendant, a company in the business of marketing computer software. The defendant executives were so impressed by the program designed by the plaintiff that they hired him as a game program consultant at a salary of $30,000 per year. In addition, they offered to purchase marketing rights to the game by a separate contract. According to the terms of the contract that they offered, the defendant would have the exclusive rights to copy and market the program for the game and would pay the plaintiff 30 percent of all revenues derived from the exercise of those rights. After consulting with his parents and their attorney, the plaintiff accepted the defendant's offer and signed the contract. Three months later, before the defendant had begun marketing the plaintiff's game program, the plaintiff needed cash to purchase expensive computer equipment. For a large cash payment, he assigned his rights under the contract to his friend. His friend intended to inform the defendant of the assignment but neglected to do so. One month later, the plaintiff assigned the same rights to another software company as security for a credit purchase of additional computer equipment. The other company was unaware of the assignment to the plaintiff's friend and never notified the defendant that the plaintiff had assigned the rights to it. Two months later, the defendant began marketing the game, realizing high profits from its sale. Although the plaintiff has demanded payment pursuant to the terms of his contract, the defendant has refused to make any payments.",
        q: "If the plaintiff commences an action against the defendant for royalties equivalent to 30 percent of the revenues generated by the sale of the game, which of the following would be the defendant's most effective argument in defense?",
        opts: [
            "The plaintiff was a minor at the time he contracted with the defendant.",
            "The plaintiff has made at least one effective assignment of the contract rights.",
            "Neither the friend nor the other company notified the defendant about the assignment from the plaintiff.",
            "An assignment of wages is invalid."
        ],
        ans: 1,
        exp: "An assignment transfers the assignor's rights to the assignee, thus extinguishing the assignor's rights under the contract. Since the plaintiff has assigned his rights under the contract, he can no longer enforce them.\n\nA is incorrect for two reasons: First, lack of contractual capacity makes a contract voidable only at the option of the person who lacked it, and second, a minor has capacity to contract in connection with his or her own business interests. An assignee's failure to notify the obligor that an assignment has been made may result in a discharge of the obligor's obligation to the assignee to the extent of payments that the obligor made to the assignor. C is incorrect, however, because the assignee's failure to notify does not alone discharge any obligation owed by the obligor. In some jurisdictions, an assignment of wages is invalid. D is incorrect for two reasons: First, if the assignment is invalid, the defendant is liable to the plaintiff, and second, the assignment was of royalties, not of wages."
    },
    {
        id: 20,
        topic: "Defenses / Statute of Frauds (Interests in Land)",
        fp: "A woman and her sister lived together in the woman's house in the town of Wildwood. On March 1, the woman called her daughter on the telephone and said that she was beginning to have premonitions of her own death. The woman said that she was willing to deed her home to her daughter while she was alive rather than put her daughter through probate expenses. The woman said, however, that she would do so only if her daughter agreed to permit her aunt to stay in the house for the rest of her life and to permit her brother, who resided in another state, to live in the house for as long as he wanted if he should ever decide to come to Wildwood. The daughter promised to do so, and on March 15, the woman deeded the home to her as agreed. At the time, the home had a value of $100,000. The daughter called her brother on March 10, and told him that their mother had deeded her the house but did not tell him about her promise to allow her brother to live there. On March 15, the aunt wrote to the brother:\n\nI don't think that either your mother or I have much longer to live, and we both miss you terribly. If you agree to come and live here in Wildwood for as long as either of us lives, I will leave you my entire estate.\nLove,\n(signed)\n\nOn March 17, the brother called his sister and told her about the note that he had received from their aunt. He said that he was thinking of moving to Wildwood, and that if his sister promised to allow him to live in the house that their mother had deeded to her until their aunt died, he would give her 50 percent of the inheritance. The daughter agreed, and her brother immediately wrote to their aunt, telling her that he was moving to Wildwood in response to her offer. Their aunt received the brother's letter on March 20. The brother made arrangements to move to Wildwood, and did so, at an expense of $800. Both their mother and their aunt died on March 22, but the brother did not learn of their deaths until he arrived in Wildwood on March 24. At that time, his sister refused to allow him to move into the house.\n\nThe brother instituted an action against his sister for damages resulting from her refusal to allow him to move into the house, and the only defense asserted by the sister was that her promises were not in writing.",
        q: "Which of the following would be the sister's most effective argument in support of her position?",
        opts: [
            "Her promises to her mother and her brother were promises to create an interest in land.",
            "It was possible that the promise that she made to her mother and her brother would not be performed within a year.",
            "The house had a value in excess of $500.",
            "She received no consideration from her brother for either promise."
        ],
        ans: 0,
        exp: "The Statute of Frauds requires that a contract to create an interest in land be in writing. Most states agree that this requirement applies to a promise to create a leasehold interest, so it would apply to both promises made by the daughter.\n\nThe Statute of Frauds also requires a writing if the contract is one that by its terms cannot be performed within one year. The promise that the daughter made to her mother could be performed within one year if her brother died during that period. The promise that the daughter made to her brother could be performed within one year if their aunt died during that period. B is therefore incorrect. UCC §2-201(1) requires that a contract for the sale of goods for a price of $500 or more be in writing. C is incorrect, however, because a house is realty rather than goods, and because the requirement of a writing is based on the price rather than the value of goods sold. Consideration is something of value given in return for a promise, but it is not necessary that the consideration flow from the promisee to the promisor. D is incorrect because the woman's conveyance to her daughter was consideration for her daughter's promise to the woman, and because her brother's promise to share the inheritance was consideration for his sister's promise to him. In addition, D is incorrect because the lack of consideration does not relate to the assertion that an oral promise is unenforceable."
    },
    {
        id: 21,
        topic: "Discharge / Mutual Rescission",
        fp: "A painter entered into a contract to paint the homeowner's house for $5,000. After painting the doors and the trim, the painter got a job offer in a different state that he had to accept immediately or would lose. He asked the homeowner if he could get out of the agreement, and the homeowner, realizing the spot the painter was in, agreed. The painter then asked if he could be paid for the amount of painting he did do. The homeowner refused.",
        q: "Can the painter sue to recover the value of the partial performance he rendered?",
        opts: [
            "No, because the painter was the one who requested to end the agreement.",
            "No, because there was a mutual rescission of the contract.",
            "Yes, because the homeowner received value from the painter.",
            "Yes, because the painter was entitled to be paid for his part performance."
        ],
        ans: 1,
        exp: "As long as neither party has fully performed a contract, the parties may agree to cancel the whole contract. Such an agreement is called a mutual rescission. However, when parties agree to a mutual rescission, most courts hold that neither party is obligated to pay for any benefits already received under the contract. A is incorrect because it is irrelevant who asked to get out of the contract first. C and D are incorrect because parties are not obligated to pay for any benefits they received under the contract before the mutual rescission."
    },
    {
        id: 22,
        topic: "Terms / Modification and the Statute of Frauds",
        fp: "The defendant, a manufacturer of widgets, entered into a valid written contract that called for the sale of 2,000 widgets to the plaintiff at a price of $10 per widget. Several weeks prior to the date set for delivery, the defendant telephoned the plaintiff and advised her that because of difficulty in locating a sufficient supply of frammis rods, the defendant would be unable to deliver more than 1,000 widgets. After discussion, the plaintiff agreed to accept 1,000 widgets at $10 per widget instead of 2,000 as originally agreed. After the defendant delivered 1,000 widgets, however, the plaintiff brought an action against him for damages resulting from breach of contract.",
        q: "Is the plaintiff entitled to damages for breach of contract?",
        opts: [
            "Yes, because the plaintiff's agreement to accept 1,000 widgets was not in writing.",
            "Yes, because the plaintiff's promise to accept 1,000 widgets was not supported by consideration.",
            "No, because the plaintiff agreed to accept 1,000 widgets.",
            "No, because there has been an accord and satisfaction."
        ],
        ans: 0,
        exp: "UCC §2-209(3) provides that an agreement to modify a contract must be in writing if the contract as modified is within the provisions of the Statute of Frauds. Since the contract as modified calls for the sale of 1,000 widgets at $10 per widget for a total price of $10,000, and since the Statute of Frauds requires a contract for the sale of goods with a price of $500 or more to be in writing, the contract as modified falls within the provisions of the Statute of Frauds. Since it is not in writing, it is not enforceable over the objection of the plaintiff.\n\nC is therefore incorrect. B is incorrect because UCC §2-209(1) provides that an agreement to modify an existing contract may be enforceable without consideration. An accord is an agreement to substitute a new obligation for an existing one. To be enforceable, an accord, like any other agreement, must be supported by consideration. Since consideration is a detriment suffered in exchange for a benefit received, and since the defendant suffered no detriment in return for the reduction in his obligation, the agreement to accept 1,000 widgets instead of 2,000 as originally required by the contract is unsupported by consideration. D is therefore incorrect."
    },
    {
        id: 23,
        topic: "Formation / Option Contracts & Revocation",
        fp: "A merchant who wanted to retire sent a signed letter to his neighbor that said, 'I'm retiring and I know you want to expand your business. I hereby offer to sell you my store and parking lot for $1 million dollars. This is a firm offer that expires in 60 days.' The neighbor said, 'I need to check my finances and such, but I appreciate this.' 'Just remember you have 60 days,' said the merchant. Two weeks later, the neighbor had talked to his bank and went over to the merchant's store to take a final look at the store before accepting the offer. When he pulled into the parking lot, he saw the merchant and a man in a suit shaking hands. The merchant saw the neighbor and said, 'I just sold the store for $1.5 million to this gentleman. He's going to build an amusement park.' The neighbor angrily got back into his car and sued the merchant the next day for breach of contract.",
        q: "Should the court rule in the neighbor's favor?",
        opts: [
            "Yes, because the merchant gave the neighbor a firm offer that didn't expire for 60 days.",
            "Yes, because the merchant gave the neighbor an option contract that didn't expire for 60 days.",
            "No, because a firm offer cannot be held open for more than 30 days.",
            "No, because the offer was revocable at any time before acceptance."
        ],
        ans: 3,
        exp: "Under the UCC, a merchant can make an irrevocable firm offer if the offer is in writing, signed by the merchant, and expressly states that the offer will be held open for a certain period of time. Under the common law, an enforceable option contract is created when the offeror makes a promise to hold the offer open and that promise is supported by consideration. Here, because the store and parking lot are land and not goods, the UCC does not apply. Because the parties did not exchange consideration to keep the offer open, it was not an enforceable option contract. Consequently, the offer was revocable at any time before acceptance and the offer was revoked when the merchant told the neighbor he'd already sold the property.\n\nFor the above reasons, A, B, and C are incorrect. C is also incorrect because a firm offer can be held open for a maximum of 90 days."
    },
    {
        id: 24,
        topic: "Formation / Rejection and Counteroffer",
        fp: "In response to an advertisement that he saw in the newspaper, the homeowner telephoned the contractor and asked him to come to the homeowner's home to estimate the cost of providing and installing new aluminum screens for all the homeowner's windows. After taking measurements, the contractor returned to his shop and prepared a written estimate, in which he said that he would do the entire job for $350. When the homeowner received the contractor's written estimate, he wrote across it with a red felt-tipped pen, 'I'll pay $300, but not a penny more,' and mailed it to the contractor. When the contractor received the estimate with the homeowner's statement written on it, he wrote on the estimate, 'I'll do it for $325.' He sent the estimate back to the homeowner on September 5, but on September 12, having received no response, he sent the homeowner a note that said, 'All right, you win. I'll do the job for $300. Unless I hear from you to the contrary, I'll be there with the new screens on September 28. Signed, the contractor.'\n\nThe homeowner received the note on September 14, but made no response. On September 28, without the homeowner's knowledge and while the homeowner was at work, the contractor went to the homeowner's home and installed new aluminum window screens.",
        q: "Which of the following best characterizes the legal relationship between the homeowner and the contractor AFTER installation of the window screens on September 28?",
        opts: [
            "A contract was formed when the homeowner failed to respond to the contractor's letter of September 12 within a reasonable time after he received it.",
            "A contract was formed when the contractor began to install the screens on September 28.",
            "A quasi-contract was formed when the contractor finished installing the screens on September 28, obligating the homeowner to pay a price equivalent to their reasonable value.",
            "No contractual relationship existed between the homeowner and the contractor."
        ],
        ans: 3,
        exp: "The note that the contractor sent on September 5 demanding $325 was a rejection of the homeowner's offer to pay $300. An offeree who has killed an offer by rejecting it does not have the power to resurrect it by a subsequent acceptance. The contractor's note of September 12 was thus no more than a new offer. Since an offer may not make the offeree's silence an acceptance, the contractor's offer of September 12 was never accepted because the homeowner did not respond to it.\n\nA is therefore incorrect. Since there was no existing offer that could be accepted by performance, the contractor's commencement of performance on September 28 could not have resulted in the formation of a contract, making B incorrect. Since the homeowner did not know that the contractor was installing the screens, and since the contractor did not have a reasonable expectation of compensation at the time he installed them, the contractor has no quasi-contract remedy, and C is incorrect."
    },
    {
        id: 25,
        topic: "Remedies / Liquidated Damages vs Penalties",
        fp: "The defendant signed a five-year contract with the plaintiff. According to the contract, the plaintiff would bag apples produced in the defendant's orchard. There was a fixed price for each pound bagged, with a minimum of 5,000 pounds to be bagged each year. A liquidated damages clause provided that if the defendant requested less than the 5,000-pound minimum, the defendant would still pay the per-pound bagging price for each pound by which the defendant's order was less than the minimum. This was so regardless of whether the plaintiff was required to do any work. In the second year, the defendant requested significantly less than the 5,000-pound minimum of bagged apples.",
        q: "Is the plaintiff entitled to damages based on the liquidated damages clause?",
        opts: [
            "No, because the liquidated damages clause is a poor estimate of actual losses.",
            "No, because the liquidated damages clause was an unenforceable penalty.",
            "Yes, because the liquidated damages clause was a reasonable estimation of damages under the contract.",
            "Yes, because damages in this situation would be difficult to calculate."
        ],
        ans: 1,
        exp: "Parties to a contract may make an explicit agreement as to what each party's remedy for a breach of contract will be. However, such 'liquidated damages clauses' are invalid if they act as a penalty. The purpose of damages is to put the plaintiff in the same position he or she would have been in had the contract been fulfilled. It is not to punish the defendant for breach. Importantly, where a damage clause is keyed to the plaintiff's lost gross revenues, lost profits, or other figure not necessarily tied to actual losses, the court is likely to find it an unenforceable penalty. Here, the clause is an unenforceable penalty because the plaintiff gets paid the same amount regardless of whether it had to do any work, and thus regardless of whether it incurred operating costs in performing the work. Consequently, the clause has no connection to the nature of the breach, and is an unreasonable estimate of potential losses to the plaintiff. A is incorrect because, although the clause is a poor estimate of actual losses, a court will not enforce it because it rises to the level of an unenforceable penalty. C is incorrect because the clause was not a reasonable estimation of the damages. D is incorrect because there is no indication this agreement is so complicated or the industry so volatile as to make damages difficult to calculate."
    }
];