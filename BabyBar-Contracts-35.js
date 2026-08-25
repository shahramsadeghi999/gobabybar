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
        exp: "A contract is formed upon acceptance of an offer[cite: 32]. Since the buyer's order identified the subject of the transaction, specified the quantity, set forth price and terms, and called for shipment, it conferred upon the seller the power to create a contract by accepting and was, therefore, an offer[cite: 32]. Catalogs of the kind used by the seller are mere invitations to negotiate because they are sent to a large number of buyers and do not refer to specific items for sale but rather to types of items[cite: 32]. Under UCC § 2-206(1)(b), an order to purchase goods for prompt shipment calls for acceptance either by prompt shipment or prompt promise to ship[cite: 32]. Since the seller shipped (i.e., accepted the offer) on April 28, the contract was formed on that exact date[cite: 32]."
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
        exp: "Under UCC § 2-314, an implied warranty of merchantability accompanies every sale by a merchant unless disclaimed by unequivocal language[cite: 32]. UCC § 2-316(3)(a) specifically provides that the phrase 'as is' may be used to effectively disclaim this implied warranty[cite: 32]. An 'as is' clause shifts the risk of defects to the buyer, providing the seller with a complete defense against an implied warranty of merchantability claim[cite: 32]."
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
        exp: "In the absence of an agreement to the contrary, one who seeks the services of another, knowing that the other expects to be paid for those services, impliedly promises to pay for the services by availing himself or herself of them[cite: 32]. Although the doctor agreed to wait for payment and to bill the defendant's insurance company directly, nothing in the conversation between the doctor and the defendant indicates that the doctor was willing to look solely to the insurance company for payment[cite: 32]. The defendant implicitly promised to ensure the doctor was compensated for the services rendered[cite: 32]."
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
        exp: "When either party to a contract breaches it, the other party is excused from further performance[cite: 32]. Since the landowner breached by refusing to make the agreed-upon progress payment as required, the contractor is entirely justified in refusing to perform any further work without incurring liability for breach[cite: 32]. The non-breaching party is also entitled to damages consisting of the losses sustained as a result of the breach, which may include expected profits for the remainder of the contract, meaning damages are not strictly capped at the missed payment amount[cite: 32]."
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
        exp: "Although the man's intended use of the store for marijuana sales is now illegal, this does not change the fact that the lease was simply a valid contract to rent a generic retail space for a year[cite: 32]. The man could still legally use the space for something else, although he might not be able to sell his planned primary product[cite: 32]. Because the core subject matter of the contract (the lease of space) is not illegal, and the space retains general utility, there is no valid reason to excuse the man's performance of the contract[cite: 32]."
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
        exp: "Under UCC § 2-201, a contract for the sale of goods for the price of $500 or more is generally not enforceable unless there is a writing signed by the party against whom enforcement is sought[cite: 32]. However, under UCC § 2-201(3)(c), an oral contract is legally enforceable with respect to goods that have been actively received and accepted[cite: 32]. Here, since the venue accepted the first two speakers, the oral contract is enforceable specifically for those two units, allowing the company to recover $50,000 ($25,000 per accepted speaker)[cite: 32]."
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
        exp: "Under the Statute of Frauds, a contract for the sale of any interest in real estate must be in writing, and the writing must contain all the essential terms[cite: 32]. The price is an absolute essential term in a contract for the sale of realty, as a court will be unable to fashion a remedy or enforce the agreement without it[cite: 32]. Although the UCC provides gap-fillers for missing prices in the sale of goods, those provisions do not apply to the sale of real estate[cite: 32]."
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
        exp: "Consideration strictly requires a bargained-for exchange[cite: 32]. Since the husband did not ask the rescuer to save his wife prior to the act occurring, the rescuer's heroic act was neither bargained for nor given in exchange for the husband's subsequent promise[cite: 32]. A service rendered in the past, even if it materially benefited the promisor, is past consideration and cannot serve as valid consideration for a new promise because it was not performed in exchange for that promise[cite: 32]."
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
        exp: "The man's note was an offer for a unilateral contract that explicitly required acceptance by the actual physical performance of delivering the car to his house, rather than by a return promise[cite: 32]. Because the man explicitly told the owner that he didn't want the car anymore before the owner actually started performance by delivering the car on the required date, the offer was validly revoked[cite: 32]. Consequently, the owner's letter was legally irrelevant, and no contract was created[cite: 32]."
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
        exp: "The seller's fundamental obligation under a contract of sale is to deliver goods that conform in every way to the exact terms of the contract under the perfect tender rule[cite: 32]. Since the contract called for delivery of 500 pens, the tender of anything less (475 pens) is a material breach allowing rejection[cite: 32]. If the buyer rightfully rejects the nonconforming tender, the buyer is entitled to the return of all money already paid in advance, plus any damages resulting from the seller's breach (such as the cost of cover)[cite: 32]."
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
        exp: "A party who wishes to make a contract may make statements that are not definitive offers but rather preliminary solicitations of bids[cite: 32]. These bids form the basis of preliminary negotiations and cannot be legally accepted to form a contract[cite: 32]. Here, the man explicitly stating 'I would consider' demonstrates that his statement was a mere solicitation of bids or opening of negotiations, not a true binding offer granting the power of acceptance[cite: 32]. Consequently, the friend cannot accept it, and no contract is formed[cite: 32]."
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
        exp: "Under the brokerage contract, the actual transfer of title was an express condition precedent to the defendant's obligation to pay the commission[cite: 32]. However, there is always an implied covenant of good faith that a party will not willfully prevent or hinder the performance of a condition to their own obligation[cite: 32]. Because the transfer of title was directly prevented by the defendant's bad-faith, willful breach of his contract with the buyer (refusing to deliver the abstract to sabotage the deal), the condition is legally excused, and the defendant is liable for the unpaid commission[cite: 32]."
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
        exp: "An accord is a new agreement intended to temporarily suspend and ultimately take the place of an existing obligation[cite: 32]. To discharge the original obligation, the accord must actually be performed; the performance of the new obligation is known as 'satisfaction'[cite: 32]. The agreement of May 21 constituted an executory accord, but since the buyer failed to pay the $45,000 in cash by the agreed May 25 deadline, there was no satisfaction[cite: 32]. Because there was no satisfaction, there is no discharge of the original obligation, allowing the seller to sue for the full $50,000 originally owed[cite: 32]."
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
        ans: 3,
        exp: "Under the common law mailbox rule, an acceptance is legally effective the moment it is properly dispatched (sent) by the offeree[cite: 32]. If the offeror never receives the acceptance, the acceptance is still valid as long as it was properly dispatched with the correct address and postage[cite: 32]. Because the writer properly dispatched the letter, the contract was fully formed upon mailing, regardless of the post office losing the physical document[cite: 32]."
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
        exp: "A promise must be supported by valid consideration to be legally enforceable, meaning there must be a bargained-for exchange[cite: 32]. Past consideration is no consideration at all; because the professor had already completed the work that resulted in the high test scores before the bonus was promised, the work could not have been bargained for in exchange for the bonus[cite: 32]. Therefore, there was no fresh consideration, and the dean's promise of a bonus is completely unenforceable[cite: 32]."
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
        exp: "UCC § 2-104 defines a merchant as a person who deals in goods of the kind involved in the transaction, or one who holds themselves out as having knowledge or skill peculiar to the goods involved[cite: 32]. The owner of an automobile dealership is not in the business of selling bicycles, does not hold themselves out as having special knowledge of bicycles, and does not employ a person who does so specifically for this transaction[cite: 32]. Therefore, they are not a merchant with respect to bicycles[cite: 32]. The others all either deal in bicycles directly or possess/employ specialized knowledge regarding them."
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
        exp: "A prospective inability to perform occurs when a party to a contract has, by their own conduct, divested themselves of the apparent ability to fulfill the contract[cite: 32]. A party who justifiably relies to its detriment on another party's severe prospective inability to perform is discharged from its own obligations under the contract[cite: 32]. Since the hotel executives learned that the plaintiff had enlisted for three years (which would make his required winter residency impossible), they were entirely justified in relying on this prospective inability by hiring a replacement caretaker to mitigate damages[cite: 32]. This detrimental reliance permanently excused the hotel from performing[cite: 32]."
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
        exp: "When unforeseeable circumstances destroy the subject matter of an existing building repair contract, performance is excused under the doctrine of impossibility without fault by either party[cite: 32]. Because the contract is discharged, neither party can sue for full expectation damages on the contract[cite: 32]. However, in construction contracts involving the repair of an existing building, the contractor is entitled to recover in quasi-contract (restitution) for the reasonable value of the work successfully done prior to the destruction, preventing total forfeiture[cite: 32]. Thus, the plaintiff recovers $1,500[cite: 32]."
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
        exp: "An assignment transfers the assignor's rights entirely to the assignee, immediately extinguishing the assignor's direct legal rights to enforce the underlying contract[cite: 32]. Since the plaintiff assigned his rights to receive royalties under the contract (to his friend, and then again later), he no longer holds the legal standing to personally enforce those rights against the defendant[cite: 32]. Consequently, the defendant's strongest defense against the plaintiff's direct lawsuit is that the plaintiff already transferred the rights away[cite: 32]."
    },
    {
        id: 20,
        topic: "Defenses / Statute of Frauds (Interests in Land)",
        fp: "A woman and her sister lived together in the woman's house in the town of Wildwood. On March 1, the woman called her daughter on the telephone and said that she was beginning to have premonitions of her own death. The woman said that she was willing to deed her home to her daughter while she was alive rather than put her daughter through probate expenses. The woman said, however, that she would do so only if her daughter agreed to permit her aunt to stay in the house for the rest of her life and to permit her brother, who resided in another state, to live in the house for as long as he wanted if he should ever decide to come to Wildwood. The daughter promised to do so, and on March 15, the woman deeded the home to her as agreed. At the time, the home had a value of $100,000. The daughter called her brother on March 10, and told him that their mother had deeded her the house but did not tell him about her promise to allow her brother to live there. On March 15, the aunt wrote to the brother: 'I don't think that either your mother or I have much longer to live, and we both miss you terribly. If you agree to come and live here in Wildwood for as long as either of us lives, I will leave you my entire estate. Love, (signed)' On March 17, the brother called his sister and told her about the note that he had received from their aunt. He said that he was thinking of moving to Wildwood, and that if his sister promised to allow him to live in the house that their mother had deeded to her until their aunt died, he would give her 50 percent of the inheritance. The daughter agreed, and her brother immediately wrote to their aunt, telling her that he was moving to Wildwood in response to her offer. Their aunt received the brother's letter on March 20. The brother made arrangements to move to Wildwood, and did so, at an expense of $800. Both their mother and their aunt died on March 22, but the brother did not learn of their deaths until he arrived in Wildwood on March 24. At that time, his sister refused to allow him to move into the house. The brother instituted an action against his sister for damages resulting from her refusal to allow him to move into the house, and the only defense asserted by the sister was that her promises were not in writing.",
        q: "Which of the following would be the sister's most effective argument in support of her position?",
        opts: [
            "Her promises to her mother and her brother were promises to create an interest in land.",
            "It was possible that the promise that she made to her mother and her brother would not be performed within a year.",
            "The house had a value in excess of $500.",
            "She received no consideration from her brother for either promise."
        ],
        ans: 0,
        exp: "The Statute of Frauds strictly requires that any contract establishing or creating an interest in land (including leasehold interests or life estates) must be memorialized in writing to be legally enforceable[cite: 32]. The daughter's oral promises to allow her aunt and brother to occupy the house effectively constituted promises to create life estates or long-term leaseholds[cite: 32]. Because these oral promises involved interests in land, they fall squarely within the Statute of Frauds, giving the sister a highly effective defense[cite: 32]."
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
        exp: "As long as neither party has fully performed a contract, the parties may mutually agree to cancel the entire contract[cite: 32]. Such an agreement is called a mutual rescission[cite: 32]. However, when parties agree to a mutual rescission without explicitly preserving claims for past work, most courts hold that neither party is legally obligated to pay for any benefits already received under the canceled contract[cite: 32]. The mutual cancellation wiped out the remaining obligations on both sides[cite: 32]."
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
        exp: "UCC § 2-209(3) states that an agreement to modify a commercial contract must be in writing if the contract, as modified, falls within the provisions of the Statute of Frauds[cite: 32]. Since the contract as modified calls for the sale of 1,000 widgets at $10 per widget, the total modified price is $10,000[cite: 32]. Because this massively exceeds the $500 threshold for the sale of goods under the Statute of Frauds, the modification absolutely required a written memorandum[cite: 32]. Because it was merely oral, it is unenforceable over the objection of the plaintiff, who may sue on the original contract[cite: 32]."
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
        exp: "Because the transaction involves the sale of real estate (a store building and parking lot) rather than goods, the Uniform Commercial Code's firm offer rule does not apply[cite: 32]. Under the common law of contracts, a promise to hold an offer open requires independent consideration to become a binding option contract[cite: 32]. Since the neighbor provided no consideration to keep the offer open, it remained a standard offer that was freely revocable at any time before acceptance[cite: 32]. The merchant legally revoked it by communicating the sale prior to any acceptance by the neighbor[cite: 32]."
    },
    {
        id: 24,
        topic: "Formation / Rejection and Counteroffer",
        fp: "In response to an advertisement that he saw in the newspaper, the homeowner telephoned the contractor and asked him to come to the homeowner's home to estimate the cost of providing and installing new aluminum screens for all the homeowner's windows. After taking measurements, the contractor returned to his shop and prepared a written estimate, in which he said that he would do the entire job for $350. When the homeowner received the contractor's written estimate, he wrote across it with a red felt-tipped pen, 'I'll pay $300, but not a penny more,' and mailed it to the contractor. When the contractor received the estimate with the homeowner's statement written on it, he wrote on the estimate, 'I'll do it for $325.' He sent the estimate back to the homeowner on September 5, but on September 12, having received no response, he sent the homeowner a note that said, 'All right, you win. I'll do the job for $300. Unless I hear from you to the contrary, I'll be there with the new screens on September 28. Signed, the contractor.' The homeowner received the note on September 14, but made no response. On September 28, without the homeowner's knowledge and while the homeowner was at work, the contractor went to the homeowner's home and installed new aluminum window screens.",
        q: "Which of the following best characterizes the legal relationship between the homeowner and the contractor AFTER installation of the window screens on September 28?",
        opts: [
            "A contract was formed when the homeowner failed to respond to the contractor's letter of September 12 within a reasonable time after he received it.",
            "A contract was formed when the contractor began to install the screens on September 28.",
            "A quasi-contract was formed when the contractor finished installing the screens on September 28, obligating the homeowner to pay a price equivalent to their reasonable value.",
            "No contractual relationship existed between the homeowner and the contractor."
        ],
        ans: 3,
        exp: "The contractor's note on September 5 demanding $325 was a counteroffer, which legally acted as a definitive rejection of the homeowner's $300 offer[cite: 32]. Once an offeree kills an offer by rejecting it, they do not have the unilateral power to resurrect it by a subsequent 'acceptance'[cite: 32]. The contractor's September 12 note agreeing to $300 was therefore merely a new offer[cite: 32]. Because an offeror cannot typically force silence to act as an acceptance, and the homeowner lacked knowledge of the actual installation, no mutual assent was reached, leaving no contractual relationship[cite: 32]."
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
        exp: "While parties may agree to a liquidated damages clause, such clauses are legally invalid if they function primarily as a punitive penalty[cite: 32]. A valid clause must be a reasonable estimate of actual potential losses[cite: 32]. Here, paying the full gross per-pound bagging price for unbagged apples grants the plaintiff the entire gross revenue without deducting the operational costs saved by doing absolutely no work[cite: 32]. Because this results in a grossly disproportionate windfall disconnected from actual net losses, the clause is an unenforceable penalty[cite: 32]."
    }
];