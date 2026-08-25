const examData = [
    {
        id: 1,
        topic: "Performance / Tender of Payment (UCC 2-511)",
        fp: "The buyer went to a car dealer to look at some of the cars on display. Selecting a car, he began negotiating with the dealer. The dealer offered to sell him the car that was on display in the showroom, but the buyer said that he wanted to buy a new one. The dealer explained that the display model was the only one she had, but she was planning to order some new ones from the manufacturer anyway and would order one for the buyer if he agreed to purchase it. The buyer and the dealer entered into a written contract for the sale of a new car at a price of $10,000, to be paid on delivery within two weeks. The following day, the dealer ordered 10 new cars from the manufacturer, and the buyer purchased materials and began building a garage for the car. One week after contracting with the buyer, the dealer notified him that the new car was ready for delivery, and the buyer went immediately to the dealer's showroom to take delivery of it. The buyer tendered his own personal check in payment of the purchase price, but the dealer refused to accept it.",
        q: "Which of the following most accurately describes the legal rights and obligations of the parties upon such refusal by the dealer?",
        opts: [
            "The buyer's tender of a check discharged the dealer's obligation under the contract, since an agreement that is silent as to the manner of payment is presumed to call for payment in cash.",
            "The buyer's tender of a check discharged the dealer's obligation under the contract unless the buyer tendered payment in cash immediately upon being informed of the dealer's refusal to accept the buyer's check.",
            "The buyer's tender of a check did not discharge the dealer's obligation under the contract, but the dealer's obligation will be discharged if the buyer fails to tender cash within a reasonable time.",
            "The dealer's refusal to accept a check discharged the buyer's obligation under the contract, since an agreement that is silent as to the manner of payment is presumed to call for payment in any manner current in the ordinary course of business."
        ],
        ans: 2,
        exp: "Under UCC § 2-511, tender of payment is sufficient when made by any means or in any manner current in the ordinary course of business unless the seller demands payment in legal tender. If the seller demands legal tender (cash), they must give the buyer any extension of time reasonably necessary to procure it. Because the buyer tendered a check, the dealer's refusal to accept it does not immediately discharge the dealer's obligation to deliver; the dealer must give the buyer a reasonable time to procure cash."
    },
    {
        id: 2,
        topic: "Terms / UCC Modification (Good Faith)",
        fp: "In preparation for a big convention to be held on June 16, the convention committee ordered 500 bobblehead dolls from the company at a total price of $500, paying for them in advance. Because the bobbleheads were to be given to conventioneers as souvenirs, they were to be imprinted with the name and slogan of the convention and were to be delivered to the committee on or before June 15. The company and the committee entered into a written contract containing the above terms on May 1. The company tendered 475 bobbleheads to the committee on June 15. The committee instituted an action against the company for breach of contract.",
        q: "If only one of the following additional facts were true, which would furnish the company with its most effective defense to that action?",
        opts: [
            "The company was unable to obtain necessary materials from its suppliers in time for production of 500 bobbleheads by June 15.",
            "The committee failed to serve the company with notice of its intention to sue before instituting the action.",
            "Only 400 conventioneers attended the convention.",
            "On June 1, the company advised the committee that it would only be able to deliver 475 bobbleheads, and the committee orally agreed to reduce the order to that number."
        ],
        ans: 3,
        exp: "Under UCC § 2-209(1), an agreement to modify a contract for the sale of goods needs no consideration to be binding, provided it is made in good faith. If the committee orally agreed to reduce the order to 475 bobbleheads, this constituted a valid modification of the contract. Delivering the modified quantity of 475 would perfectly conform to the newly modified agreement, providing the company with an absolute defense against a breach of contract claim."
    },
    {
        id: 3,
        topic: "Performance / Condition Precedent",
        fp: "On June 1, a licensed real estate broker entered into a written contract with a homeowner. According to the contract, the broker was given the exclusive right to sell the homeowner's home at a price of $100,000 for a period of three months. The homeowner agreed to pay the broker a 7 percent commission 'upon transfer of title.' On July 1, as a result of the broker's efforts, a buyer agreed to purchase the homeowner's home at a price of $98,000, with title to close on December 1. The broker was unaware of the transaction and did not participate in it. On November 1, the buyer informed the homeowner that he would not be going through with the deal. The broker sued the homeowner for a 7 percent commission based on the homeowner's contract with the buyer.",
        q: "Which of the following would be the homeowner's most effective argument in defense against the broker's claim?",
        opts: [
            "The price that the buyer agreed to pay for the purchase of the homeowner's home was $98,000.",
            "Transfer of title was not to take place until after the three-month period of the broker's exclusive right to sell.",
            "As a result of the buyer's conduct, transfer of title never took place.",
            "The broker did not participate in the formation of the homeowner's contract with the buyer."
        ],
        ans: 2,
        exp: "The contract expressly stated that the commission was to be paid 'upon transfer of title.' This established an express condition precedent to the homeowner's obligation to pay the commission. Because the buyer backed out and breached the purchase agreement, the transfer of title never occurred. Since the non-occurrence of the condition was not due to the fault or bad faith of the homeowner, the homeowner's duty to pay the commission never arose."
    },
    {
        id: 4,
        topic: "Consideration / Gift Promises",
        fp: "When the plaintiff was accepted to law school, her mother was so proud of the plaintiff that she said, 'If you successfully complete your first year, I'll buy all your books for the following two years and give you $250 for each A.' The plaintiff's mother died while the plaintiff was in her first year of law school, but the plaintiff succeeded in earning two 'A's in her first year and completed school in two additional years.",
        q: "If the plaintiff asserts a claim against her mother's executrix for the cost of the books that she purchased in her second and third year of law school, which of the following would be the executrix's most effective argument in defense against the plaintiff's claim?",
        opts: [
            "The agreement between the plaintiff and her mother was divisible.",
            "The agreement between the plaintiff and her mother was not in writing.",
            "The mother's offer was for payment of a cash bonus.",
            "The mother's promise was unsupported by consideration."
        ],
        ans: 3,
        exp: "To be enforceable, a promise must be supported by valid consideration, which requires a bargained-for exchange. The mother's statement was a classic conditional gift promise rather than a bargained-for commercial exchange. Because the mother was not bargaining for the daughter to get 'A's in order to receive some benefit for herself, the promise lacked consideration and is legally unenforceable as a gratuitous promise."
    },
    {
        id: 5,
        topic: "Third Parties / Notification of Assignment",
        fp: "A man developed a new phone application that allowed users to follow the records of their favorite college teams. A company liked the application and offered the man a job as an in-house designer and 30 percent of the application's revenues if the man would give the company the exclusive right to market and sell the application. The man and the company agreed to the arrangement. Soon thereafter, the man assigned his rights in the contract to the plaintiff in return for some music equipment. A week after that, the man assigned his rights under the contract to a software company. Three months later, the company offered to pay the man $50,000 for all rights to the application if the man would consent to a mutual rescission of the contract. The man accepted the offer and received a payment of $50,000.",
        q: "If the plaintiff subsequently institutes an action against the company for a sum equivalent to 30 percent of the revenues derived from the sale of the application, should the court find in the plaintiff's favor?",
        opts: [
            "No, because the rights under which the plaintiff is claiming were subsequently assigned to the software company.",
            "No, because the company was unaware of the assignment to the plaintiff at the time it paid $50,000 to the man.",
            "Yes, because the right that the man purported to assign to the plaintiff was identified at the time of the purported assignment.",
            "Yes, because he gave value for the right that the man assigned to him."
        ],
        ans: 1,
        exp: "When an assignor assigns a right to receive payment, the obligor (the company) must be properly notified of the assignment. If the obligor pays the original assignor (the man) in good faith without having received notice of the assignment, the obligor's duty is completely discharged. Because the company was completely unaware of the assignment to the plaintiff when it paid the $50,000 settlement to the man, the company is discharged from any further liability to the assignee."
    },
    {
        id: 6,
        topic: "Acceptance / Prompt Shipment of Non-Conforming Goods",
        fp: "A software company ordered a specific $1,000 Internet router from a manufacturer. Because the company was facing a deadline in delivering a new videogame, it wrote on the order that it would pay $1,000 for the router so long as the manufacturer shipped it as quickly as possible. That day, the manufacturer shipped a router to the company. However, due to the manufacturer's efforts to ship the router as quickly as possible, it negligently sent the company the wrong router. The shipped router would work with the company's equipment, but it was an $800 model that wasn't quite as fast as the $1,000 model. The company asked its in-house attorney what its rights were.",
        q: "How should the in-house attorney advise the company?",
        opts: [
            "The manufacturer's shipment of the router was a counteroffer, and the company could choose to accept it or not.",
            "The company must accept the router, and it is not entitled to damages because its request for quick shipment caused the mistake.",
            "The company is not entitled to damages, but it does not have to accept the router because it wasn't the one it ordered.",
            "The company does not have to accept the router, and it is entitled to damages caused by the manufacturer sending the wrong router."
        ],
        ans: 3,
        exp: "Under UCC § 2-206(1)(b), an order inviting prompt shipment is accepted by the prompt shipment of either conforming or non-conforming goods. Shipping non-conforming goods acts as a simultaneous acceptance and breach, unless the seller seasonably notifies the buyer that the shipment is offered only as an accommodation. Because no accommodation notice was given, the manufacturer accepted the contract and breached it simultaneously, entitling the company to reject the goods and sue for damages."
    },
    {
        id: 7,
        topic: "Third Parties / Assignment of Rights",
        fp: "The homeowner hired the defendant to maintain his lawn, agreeing to pay him $50 per month for certain specified services. Two months later, the homeowner sold his house to the plaintiff. At the closing of title, the homeowner handed the plaintiff the original memorandum of his agreement with the defendant and executed an assignment to the plaintiff of his rights thereunder. The defendant continued rendering services as agreed for an additional six months, receiving a check for $50 from the plaintiff each month. Then, the defendant notified the plaintiff that he would no longer be able to work on the lawn.",
        q: "The plaintiff sued the defendant for breaching the agreement contained in the memorandum. Is the plaintiff entitled to enforce the agreement?",
        opts: [
            "No, because the payment by the plaintiff did not result in a novation.",
            "No, because his only agreement was with the homeowner.",
            "Yes, because he owned the home that was the subject of the agreement.",
            "Yes, as assignee of the agreement between the homeowner and the defendant."
        ],
        ans: 3,
        exp: "A party to a contract may generally assign their rights under the contract to a third party, provided the assignment does not materially change the obligor's duty or materially increase the burden or risk imposed on them. Because the defendant's duty was simply to maintain the exact same lawn, the assignment of the right to receive those services from the homeowner to the plaintiff was valid. Therefore, the plaintiff, as a valid assignee, has standing to enforce the agreement against the defendant."
    },
    {
        id: 8,
        topic: "Remedies / Collateral Source Rule & Independent Obligations",
        fp: "When the homeowner purchased her home, she obtained a fire insurance policy. The policy provided that if the home was destroyed or seriously damaged by fire, the insurance company would pay 'living expenses necessitated by the loss' until the homeowner's house was rebuilt or she acquired another house, but in no event for a period in excess of 90 days. The policy stated that since it was often impracticable to distinguish between normal living expenses and those necessitated by fire loss, the insurance company's liability for 'living expenses necessitated by the loss' was fixed at $50 per day. Subsequently, the homeowner's home was seriously damaged by fire. The homeowner moved into a hotel and entered into a written contract with a contractor for repairs to her home. The contract required payment in advance by the homeowner and completion of repairs by the contractor within 60 days. One of its clauses provided that if the contractor failed to complete the job on time, the contractor would pay the homeowner the sum of $50 per day as liquidated damages. It took the contractor 70 days to complete the job. The insurance company paid the homeowner $3,000 (60 days at $50 per day), but refused to pay the additional $500 for the 10-day period caused by the contractor's late performance.",
        q: "Is the homeowner entitled to the $500?",
        opts: [
            "Yes, because the insurance company agreed to pay $50 per day until the homeowner's house was reconstructed.",
            "Yes, because she can establish that her 'living expenses necessitated by the loss' exceeded whatever amount she was entitled to receive from the contractor.",
            "No, because at the time the fire insurance policy was issued to the homeowner, it was not reasonable that the homeowner would expend approximately $50 per day in 'living expenses necessitated by the loss' in the event of fire damage to her home.",
            "No, because the homeowner is estopped by the liquidated damages clause in her contract with the contractor from asserting that her 'living expenses necessitated by the loss' exceeded $50 per day."
        ],
        ans: 0,
        exp: "The homeowner's contract with the insurance company and her contract with the builder are entirely independent obligations. The insurance policy explicitly obligated the insurer to pay $50 per day until the house was rebuilt, up to a maximum of 90 days. Because the house was not rebuilt until day 70, the insurance company is contractually obligated to pay the $50 per day for the full 70 days, regardless of the fact that the homeowner is also receiving liquidated damages from the breaching contractor."
    },
    {
        id: 9,
        topic: "Performance / Divisible Contracts",
        fp: "An asbestos removal company entered into a written agreement with a university to remove the asbestos from all of the university's buildings. There were 20 buildings on campus, and the company agreed to remove the asbestos from the buildings for $10,000 per building. According to the terms of the contract, the company would be entitled to $200,000 when removal from all 20 buildings was completed. Due to cash flow problems, the company asked for $50,000 after it had completed removal from five of the buildings. The university refused to pay the company until the asbestos was removed from all 20 buildings. The company could not do anymore work without the $50,000 requested, so it stopped work and sued the university for the work it had completed.",
        q: "Is the company entitled to recovery?",
        opts: [
            "Yes, because the contract is divisible.",
            "Yes, because the company can't complete the contract without payment for the completed removal from the five buildings.",
            "No, because the company did not complete removal from all 20 buildings.",
            "No, because cash flow issues would have been foreseeable at the time of contracting."
        ],
        ans: 0,
        exp: "A contract is considered 'divisible' if the performances to be exchanged can be apportioned into corresponding pairs of part performances that the parties treat as equivalent. Because the contract explicitly priced the work at $10,000 per individual building, the contract is highly divisible. Even though the company breached by failing to complete all 20 buildings, they are entitled to recover the contract price for the severable, completed portions of the contract (the five buildings), subject to any offset for damages caused by their breach."
    },
    {
        id: 10,
        topic: "Remedies / Buyer's Remedies upon Revocation of Acceptance",
        fp: "By a written contract, the owner of a bar agreed to purchase 200 pounds of large, pickled eggs from a farmer at a specified price. A term of the contract provided that 'payment shall be due immediately on delivery and prior to inspection of the shipment.' When a box containing the eggs was delivered, the bar owner paid the agreed price without inspecting its contents. One hour later, the bar owner opened the box and discovered that it contained small eggs rather than large eggs. When the bar owner called the farmer to ask that the farmer exchange the small eggs for large ones, the farmer refused. The bar owner repackaged the eggs and returned them to the farmer. Subsequently, the bar owner asserted a claim against the farmer for breach of contract.",
        q: "If the bar owner succeeds in an action against the farmer for breach of contract, what is the most likely action the court will take?",
        opts: [
            "Issue an order directing the farmer to deliver 200 pounds of large pickled eggs as required by the contract.",
            "Award damages consisting of the difference between the value of large eggs and small eggs.",
            "Award damages consisting of the purchase price plus the difference between the contract price and the market price for large eggs.",
            "Require the farmer to return the money that the bar owner paid."
        ],
        ans: 2,
        exp: "Because the contract required payment prior to inspection, the buyer's initial payment did not constitute an absolute acceptance. The buyer properly rejected (or revoked acceptance of) the nonconforming goods. Under UCC § 2-711, a buyer who rightfully rejects goods is entitled to a refund of the purchase price already paid, PLUS expectation damages (cover damages or the difference between the contract price and the market price) to put them in the position they would have been in had the contract been fulfilled."
    },
    {
        id: 11,
        topic: "Formation / Mailbox Rule",
        fp: "The buyer, who was planning to go to law school, told the seller that he might need some law books. The seller had recently inherited a law library, so he compiled a list of the books in the collection and mailed it to the buyer on July 5 with a note that said, 'Interested in buying?' The buyer wrote back to the seller and told him that he would buy the books if the seller delivered them to his home on September 1. The seller received the letter on Wednesday, July 9, and immediately responded by writing, 'I accept your offer to buy my library and will deliver it to you as you require.' He signed the letter and mailed it properly addressed to the buyer, but due to a fire in the post office, it was never delivered. When the seller delivered the books on September 1, the buyer refused to accept them.",
        q: "If the seller instituted an action against the buyer for breach of contract, which of the following statements is most correct about the seller's letter of July 9?",
        opts: [
            "It bound both parties to a unilateral contract when it was mailed.",
            "It formed a bilateral contract when mailed because the buyer chose the mail as the medium of communication.",
            "The letter would have constituted an acceptance if it had been received, but because it was not received, no contract was formed.",
            "The seller's mailing of the letter did not prevent the buyer from withdrawing his offer."
        ],
        ans: 1,
        exp: "Under the common law mailbox rule, an acceptance is legally effective the moment it is properly dispatched (mailed) by the offeree, provided it is sent using a reasonable medium of communication. Because the buyer initiated the negotiations and sent the offer via mail, replying by mail was undeniably reasonable. The contract was formed the moment the seller mailed the acceptance on July 9, and it remains binding even if the letter is subsequently lost in the mail and never received by the offeror."
    },
    {
        id: 12,
        topic: "Remedies / Liquidated Damages Validity",
        fp: "Because the buyer was arranging to move his family across the country on April 20, the buyer insisted that the contract for his new home contain a liquidated damages clause. The clause provided that if the new home was not ready for occupancy on April 20, the seller would pay the buyer $75 for each day thereafter that it remained unavailable for occupancy. When the buyer and his family moved on April 20, the home was not ready for occupancy. As a result, the buyer and his family had to stay at a motel. On May 1, the seller advised the buyer that he did not intend to go through with the sale of this house. On May 10, the buyer instituted an action against the seller for specific performance and damages pursuant to the liquidated damages clause.",
        q: "With respect to the buyer's demand for damages pursuant to the contract's liquidated damages clause, what will the court's finding turn on?",
        opts: [
            "Whether the motel at which the buyer stayed charged a rate that was commercially reasonable.",
            "Whether the buyer could have avoided staying at a motel by making a reasonable attempt to mitigate damages.",
            "Whether, at the time the contract was formed, the sum of $75 per day was reasonably related to what the parties believed the buyer's living expenses would be.",
            "Whether the buyer's purpose in insisting on a liquidated damages clause was to encourage the seller to vacate the premises on time."
        ],
        ans: 2,
        exp: "A liquidated damages clause is enforceable only if it satisfies two requirements: (1) at the time of contracting, actual damages must have been difficult to estimate, and (2) the stipulated amount must represent a reasonable forecast of the anticipated harm. It cannot serve merely as a penalty. Therefore, the court's determination of the clause's enforceability will turn directly on whether $75 per day was a reasonable forecast of the buyer's anticipated living expenses at the time the contract was formed."
    },
    {
        id: 13,
        topic: "Consideration / Past Consideration",
        fp: "A man, who had been studying the writings of various saints, decided to sell all his worldly possessions, give the money to charity, and hike for a while to seek insight and spiritual fulfillment. After about a month, the man became ill and collapsed into unconsciousness. When he awoke, he was in the home of a retired surgeon who now lived like a hermit in the mountains, and who had found him in a helpless condition. As the doctor fed garlic soup to the man, the man said, 'I have no money. I can never pay you for any of this.' The doctor replied, 'I'm not doing this for money.' In the next week, the doctor fed the man and gave him medical treatment. When the man was well enough to travel, the doctor borrowed an old pickup truck from a distant neighbor and drove the man to the house of the man's mother. The following week, after the man told his mother what the doctor did for him, the man's mother wrote the doctor: 'In gratitude for the services that you rendered my son, I hereby promise to pay you $350.00 when I get my dividend check next month.' Before the dividend check arrived, however, both the man's mother and the doctor died. The doctor's administrator advised the mother's husband of the letter that his wife had sent and indicated that he intended to make a claim against her estate for $350. After a discussion with the administrator, in which the administrator agreed not to assert a claim against the mother's estate, the husband prepared a document that read, 'In consideration of services rendered by the doctor to my wife's son, and of the administrator's promise to make no claim against the estate of my wife, I hereby agree to pay $350.00 to the doctor's estate.' After signing the document, the husband handed it to the administrator. The husband never paid anything to the estate, however, and the administrator instituted suit against him. The husband defended on the ground that his promise to pay $350 was not supported by consideration.",
        q: "Were the services rendered by the doctor sufficient consideration for the husband's promise?",
        opts: [
            "They are sufficient consideration because they imposed a preexisting moral obligation on the husband.",
            "They are not sufficient consideration because they were not requested by the husband.",
            "The question of whether or not they are sufficient consideration depends on whether the husband received any material benefit from them.",
            "The question of whether or not they are sufficient consideration depends upon whether the reasonable value of the services approximated $350."
        ],
        ans: 1,
        exp: "Consideration strictly requires a bargained-for exchange. The doctor rendered the life-saving services in the past, without any prior request from the husband (or the mother), and without any expectation of payment. Because the services were rendered entirely in the past and were not given in exchange to induce the husband's current promise, they constitute past consideration. Past consideration is generally no consideration at all, meaning the husband's promise was merely an unenforceable gratuitous pledge."
    },
    {
        id: 14,
        topic: "Termination / Revocation of General Offer",
        fp: "On September 10, the company, a well-known publisher of law books, posted a notice in the law school bookstore that it would award $10,000 to the student with the highest grade point average. A student, who had just begun her final year at the law school, saw the notice. Her grades already placed her toward the top of her class, but she resolved to work harder than ever before in an attempt to win the company's award. On September 20, she mailed a letter to the company saying, 'I accept your offer for the award and will do my best to win it.' The following May, because of budget cutbacks, the company posted a new notice at the law school stating that it would not be presenting any awards.",
        q: "In a jurisdiction that applies the Restatement (Second) of Contracts rule, what will be the most important factor in a court's decision as to whether the company's offer was effectively revoked by the notice posted in May?",
        opts: [
            "Whether the student saw the second notice before taking her exams.",
            "Whether the second notice was as large and as conspicuously posted as the first.",
            "Whether the student's letter of September 20 was effective when mailed or when received.",
            "Whether the student made extra efforts in her studies in reliance on the September 10 notice."
        ],
        ans: 1,
        exp: "When an offer is made by general advertisement to the public (such as posting a reward notice in a bookstore), the offer can only be validly revoked by communicating the revocation in a manner equal to or better than the original offer. Therefore, a revocation must be distributed through the same medium and with the same prominence and conspicuousness as the original offer. If the second notice was physically smaller or hidden compared to the first, the revocation is legally ineffective, regardless of whether the specific offeree actually saw it."
    },
    {
        id: 15,
        topic: "Performance / Condition Precedent Failure",
        fp: "When a landowner's daughter and a painting contractor's son announced that they were getting married, the landowner and the contractor decided to give them a house as a wedding present. On January 1, the two men entered into a written agreement with each other, pursuant to which they were to have a house built on the landowner's lot, with the landowner and the contractor each paying half the cost. It was further agreed that after completion of the house, the contractor would pay the landowner $10,000 as his share of the cost of the lot, and the landowner would convey the lot to their children. On February 2, the two men entered into a written contract with a builder. The contract called for payment in installments, each payment being due upon completion of a specified stage of building. In addition to its other terms, the contract contained a clause providing that as each payment came due, the builder would bill and collect half the payment from the landowner and half from the contractor. In the contract, the builder agreed that neither would be responsible to him for more than half the price. On March 3, the contractor entered into a separate contract with the builder. Pursuant to this contract, the builder hired the contractor as a subcontractor to do all the painting required in connection with the construction of the house. Because the house was being built for his son, the contractor agreed to do the job for $3,000, although his work was worth $5,000. The $3,000 was to be deducted from the final payment that the contractor would owe the builder for construction of the house. In April, the contractor became ill. Because he could no longer work, he sold his painting business to his son, a competent and licensed painting contractor, for about half of what it was actually worth. As one of the terms of the contract of sale, the contractor's son promised to do all the painting work on the house that the builder was constructing. The contractor notified the builder of his agreement with his son. When the house was ready to be painted, however, the contractor's son informed the builder that he would not paint it. The landowner then decided he did not want to convey the property to his daughter and the contractor's son. The contractor's son then sued the landowner.",
        q: "Which of the following arguments would furnish the landowner with his strongest defense?",
        opts: [
            "The contractor's son did not rely or assent to the contract of January 1 between the landowner and the contractor.",
            "The contractor's son's painting of the house was a condition precedent to the landowner's obligation to convey.",
            "The contractor's son was only an incidental beneficiary of the January 1 contract between the landowner and the contractor since the landowner's primary intention was to benefit his daughter.",
            "The contract that the contractor made with the builder on March 3 was a breach of a fiduciary obligation that the contractor owed the landowner."
        ],
        ans: 1,
        exp: "The original agreement stipulated that the landowner's duty to convey the lot to the children was expressly conditioned 'after completion of the house.' By refusing to paint the house, the contractor's son directly caused the house to remain uncompleted. Because the completion of the house operated as an express condition precedent to the landowner's duty to convey title, the failure of that condition legally excuses the landowner from performing."
    },
    {
        id: 16,
        topic: "Remedies / Specific Performance (Unique Goods)",
        fp: "The seller and the buyer had been friends for years. The seller was the owner of a rare guitar, which the buyer had offered to buy from her on several occasions but which the seller had never been willing to sell. On the buyer's birthday, the seller and the buyer went out for dinner and drinks. After dinner, the seller continued drinking until she was somewhat intoxicated. During their conversation, the seller said, 'As a birthday present, I've decided that I'm going to sell you my guitar for $500. And just to make sure that I don't change my mind after I sober up, I'll put it in writing.' With that, she wrote on a paper napkin, 'We agree to the sale of my guitar to the buyer for $500, COD,' and signed her name at the bottom. The buyer also signed the napkin and put it in her purse. The following day, the buyer tendered $500 in cash to the seller, but the seller refused to sell her the guitar, claiming that she had been drunk when she made the offer.",
        q: "If the buyer is successful in an action against the seller, what action is the court most likely to take?",
        opts: [
            "Issue an order directing the seller to sell the buyer the guitar for $500.",
            "Award damages equivalent to the reasonable market value of the guitar.",
            "Issue an order directing the seller to sell her guitar for $500 and award damages equivalent to the reasonable market value of the seller's guitar less $500.",
            "Award damages of $500."
        ],
        ans: 0,
        exp: "While the standard remedy for breach of contract is expectation damages, courts will grant the equitable remedy of specific performance when the subject matter of the contract is unique or cannot be easily replaced on the open market, rendering monetary damages legally inadequate. Because a 'rare guitar' is a unique chattel, the court will issue an order forcing the breaching seller to specifically perform the contract by handing over the exact guitar for the agreed $500 price."
    },
    {
        id: 17,
        topic: "Applicable Law / Scope of UCC Article 2",
        fp: "The plaintiff had long admired the defendant's dog, which was trained to get the paper and start the coffeepot every morning. The plaintiff finally convinced the defendant to agree to sell him the dog, and the defendant wrote out a contract that said, 'I agree to sell my dog to the plaintiff. Price to be decided at delivery.' The plaintiff was seeking to purchase the dog for resale. When the plaintiff arrived to pick up the dog a week later, the defendant refused to give the dog to him. The plaintiff then filed suit.",
        q: "Does the UCC apply to the transaction between the plaintiff and the defendant?",
        opts: [
            "Yes, because this was a transaction in goods.",
            "Yes, because the price and the delivery date terms were missing from the agreement.",
            "No, because, unless it is a farm animal, a living thing does not fit the definition of 'goods' under the UCC.",
            "No, because the plaintiff was seeking to purchase the dog for resale."
        ],
        ans: 0,
        exp: "UCC Article 2 applies to all transactions in 'goods.' Goods are defined broadly as all things (including specially manufactured goods) which are movable at the time of identification to the contract for sale. The UCC explicitly classifies animals—including pets and livestock—as movable, tangible personal property, qualifying them as 'goods.' Therefore, the sale of the dog is strictly governed by the UCC."
    },
    {
        id: 18,
        topic: "Remedies / Limitations on Specific Performance",
        fp: "An attorney decided to invest $4,000 in art for her office. On November 1, she decided to purchase a painting from the defendant, with delivery to be made to the attorney on December 28 after the painting was framed. On November 15, the attorney learned that the defendant had accidentally sold the painting to another buyer. Based on this knowledge, the attorney gave another art dealer $4,000 to purchase another painting. On November 30, the defendant learned of the mistake and got the painting back from the other buyer. On December 28, when the defendant arrived at the attorney's office with the framed painting, the attorney refused to accept it. The attorney instituted an action against the defendant on December 29 seeking specific performance of the November 1 agreement.",
        q: "Is the attorney entitled to specific performance?",
        opts: [
            "No, because the attorney refused to accept delivery of the painting on December 28.",
            "No, because the attorney has already succeeded in investing $4,000 in art for her office.",
            "Yes, because the painting is unique.",
            "Yes, because the defendant's sale to the other person was an anticipatory repudiation of its contract with the attorney."
        ],
        ans: 1,
        exp: "When the defendant repudiated the contract by selling to a third party on November 15, the attorney was legally entitled to treat the repudiation as final and mitigate her damages by 'covering' (buying substitute goods). By spending her $4,000 budget on a substitute painting from another dealer, she materially changed her position in reliance on the repudiation, terminating the defendant's right to retract. Because specific performance is an equitable remedy meant to make the plaintiff whole when monetary damages are inadequate, the fact that the attorney already successfully mitigated her investment entirely defeats her claim for a court order forcing the original sale."
    },
    {
        id: 19,
        topic: "Performance / Condition Subsequent",
        fp: "The seller was the owner of a lot and building that contained two residential apartments. The seller resided in the upstairs apartment and rented the downstairs apartment to a tenant and his family on a month-to-month basis. The buyer was interested in purchasing the realty from the seller. After negotiations, the buyer and the seller entered into a written contract that provided that the seller would sell the house to the buyer for $60,000 and that delivery of title was to occur on or before August 1. The seller promised that at the time title was delivered, the upstairs apartment would be vacant and that the downstairs apartment would be vacant within three months thereafter. The buyer promised to pay $58,000 upon delivery of title and the balance of $2,000 three months after delivery of title. The contract provided that 'The buyer's obligation to pay $2,000 three months after delivery of title shall be voided if the downstairs apartment has not been vacated by that time.' The seller delivered title to the buyer on August 1, and as of November 15, the downstairs apartment remained occupied by the tenant.",
        q: "Which of the following statements best describes the buyer's rights?",
        opts: [
            "The buyer is entitled to an order directing the seller to commence a legal proceeding against the tenant for the purpose of evicting him from the premises.",
            "The buyer is not required to pay the seller the additional $2,000.",
            "The buyer is entitled to rescind his contract with the seller, re-conveying title to her and receiving the return of his $58,000.",
            "The buyer may bring a legal proceeding for the purpose of evicting the tenant from the premises, and, if successful, is required to pay the seller $2,000 less the expenses he incurred in evicting the tenant."
        ],
        ans: 1,
        exp: "A condition subsequent is an event that extinguishes or discharges an existing contractual duty. The contract explicitly stated that the buyer's obligation to pay the final $2,000 would be 'voided' if the tenant did not vacate within three months. Because the tenant remained in the downstairs apartment well past the three-month deadline (November 1), the condition subsequent occurred, automatically discharging the buyer's obligation to pay the remaining $2,000."
    },
    {
        id: 20,
        topic: "Formation / Mailbox Rule Exception (Electronic)",
        fp: "The buyer was a collector of antiques who had purchased many expensive pieces from the seller, an antiques dealer. Knowing that the seller was traveling to Europe, the buyer wrote to him on March 11, 'If you should come across a good piece in your travels, please purchase it for me. I don't care about the cost.' On April 17, the seller wrote to the buyer, 'I have found an excellent table. The price is $15,000, but I think it's a good buy. Are you still interested? If so, let me know if the price is acceptable to you.' The next day, for personal reasons, the seller decided he did not want to sell to the buyer. The buyer received the seller's letter on April 21, and, on that same day, emailed the seller, 'Fifteen thousand is OK. Buy the piece on my account.' The seller later sold the piece to another buyer who offered more money.",
        q: "In litigation between the buyer and seller, if a court determines that the seller's letter of April 17 was an offer, was a contract formed between the buyer and the seller?",
        opts: [
            "Yes, because sending an email was a reasonable way for the buyer to accept the seller's offer.",
            "Yes, because, as a merchant, the seller was obligated to act in good faith.",
            "No, because an offer sent by mail may be accepted only by mail.",
            "No, because the seller changed his mind about the piece prior to April 21."
        ],
        ans: 0,
        exp: "Unless an offer explicitly restricts the method of acceptance, an offer invites acceptance by any medium reasonable under the circumstances. Given modern commercial practices and the prior communication, replying to a mailed offer via email is considered a highly reasonable method of acceptance. Because the seller never actually communicated his revocation to the buyer before the buyer dispatched the email, the contract was validly formed the moment the buyer hit send on the email under standard dispatch/mailbox rule principles."
    },
    {
        id: 21,
        topic: "Third Parties / Defenses Against Assignee",
        fp: "A banking firm hired a computer-banking specialist to update its computer network for $15,000. The specialist then went to work installing hardware and writing special software for the firm. Soon thereafter, to pay off a debt that the specialist owed to a computer programmer, the specialist assigned to the computer programmer her rights to receive payment under the contract. After the work was completed, the firm refused to pay. The computer programmer instituted a claim against the firm for $15,000.",
        q: "Which one of the following additional facts or inferences, if it were the only one true, would be most likely to lead to a judgment for the firm?",
        opts: [
            "The programmer was not a specialist in the application of computer technology to the practice of banking.",
            "The contract between the specialist and the firm did not contain a clause permitting assignment.",
            "The contract between the specialist and the firm contained language that stated, 'This contract may not be modified except by a writing signed by both parties hereto.'",
            "The firm paid $15,000 to the specialist prior to being notified of the specialist's assignment to the programmer."
        ],
        ans: 3,
        exp: "When a party assigns the right to receive payment, the obligor (the firm) remains liable to the original assignor until they receive proper, effective notice of the assignment. If the obligor pays the assignor in good faith before receiving notice of the assignment, the obligor's contractual duty is fully discharged. Consequently, if the firm paid the original specialist before being told to pay the programmer, the firm owes the programmer nothing."
    },
    {
        id: 22,
        topic: "Terms / UCC Modification (No Consideration Required)",
        fp: "The defendant was a veterinarian who sometimes acquired exotic animals from local zoos. The plaintiff was the owner of a large livestock ranch. On March 10, the defendant and the plaintiff agreed that the defendant would sell the plaintiff an aardvark for $450, payment and delivery to be on March 20. On March 15, the plaintiff called the defendant and said, 'When you deliver the aardvark, will you throw in a pig for my daughter without charging extra for it?' The defendant said, 'Yes,' but when she delivered the aardvark on March 20, she refused to give the daughter a pig.",
        q: "If the plaintiff asserts a claim against the defendant because of her failure to deliver the pig as promised, why would the court decide in the plaintiff's favor?",
        opts: [
            "The plaintiff and the defendant were merchants with respect to the sale of a pig.",
            "The plaintiff and the defendant were merchants with respect to the sale of an aardvark.",
            "The plaintiff and the defendant were merchants with respect to the sale of an aardvark and a pig.",
            "The plaintiff and the defendant made a contract for the sale of goods."
        ],
        ans: 3,
        exp: "Because the transaction involves the sale of animals, it is governed by UCC Article 2 (Sale of Goods). Unlike the common law pre-existing duty rule, UCC § 2-209 expressly allows parties to modify a contract for the sale of goods without any new consideration, provided the modification is sought and agreed upon in good faith. Therefore, the defendant's promise to include the pig for no extra charge was a valid, binding modification simply because it was a contract for the sale of goods."
    },
    {
        id: 23,
        topic: "Remedies / Buyer's Damages for Breach",
        fp: "On January 3, a retailer of lumber ordered from a lumber wholesaler 1,000 2\" x 4\" fir boards, each 8 feet in length, for delivery by January 15. When the wholesaler delivered the fir boards on January 15, they were received by the retailer's manager, who informed the retailer that delivery was made but that the boards delivered by the wholesaler were only 7 feet long. The retailer intended to notify the wholesaler immediately but was busy and forgot to do so. On January 16, economic conditions caused the price of lumber to double, and on January 17, the retailer notified the wholesaler that the boards were only 7 feet long, returned them to the wholesaler, and demanded that the wholesaler furnish 8-foot boards at the contract price.",
        q: "If the wholesaler refuses to do so, and the retailer asserts a claim against the wholesaler for breach of contract, what recovery is the retailer entitled to?",
        opts: [
            "A sum equivalent to the difference between the contract price and the fair market value of 7-foot boards on January 15.",
            "A sum equivalent to the difference between the contract price and the fair market value of 8-foot boards on January 15.",
            "A sum equivalent to the difference between the contract price and the fair market value of 8-foot boards on January 17.",
            "Nothing."
        ],
        ans: 1,
        exp: "Under UCC § 2-713, a buyer's standard measure of damages for non-delivery or repudiation is the difference between the market price at the time the buyer learned of the breach and the contract price, plus any incidental and consequential damages. Because the retailer learned of the breach on January 15 (when the short boards were delivered), the damages must be anchored to the market value of the requested conforming goods (8-foot boards) on that specific date, preventing the retailer from unfairly benefiting from the subsequent market spike on January 16."
    },
    {
        id: 24,
        topic: "Third Parties / Assignor Warranties",
        fp: "A pawnbroker occasionally sold used jewelry to the buyer, who owned a jewelry store. On June 1, the pawnbroker sold the buyer a ring for $2,500, representing the stone in it to be a diamond. On July 16, the buyer learned that the stone in the ring that he had purchased from the pawnbroker was not a diamond but rather cubic zirconia, making the ring worth only $300. On July 17, the pawnbroker assigned to a retailer, for $1,500 cash, the sales contract with the buyer. The retailer then requested payment from the buyer. The buyer refused. The retailer sued the buyer, but in defense, the buyer claimed the stone was not a diamond, and the suit was unsuccessful.",
        q: "If the retailer brings an action against the pawnbroker, should the court find in the retailer's favor?",
        opts: [
            "No, because an assignment does not imply a warranty that the obligor will perform.",
            "No, because the assignment to the retailer caused the retailer to step into the pawnbroker's shoes with respect to the claim against the buyer.",
            "Yes, because the buyer's defense existed at the time the assignment was made by the pawnbroker to the retailer.",
            "Yes, because an assignment for consideration implies a warranty that the obligor will perform."
        ],
        ans: 2,
        exp: "When a party assigns a contract right for value (consideration), the assignor implicitly warrants that the assigned right actually exists and is completely free from any undisclosed defenses or limitations. Because the pawnbroker committed fraud/breached the warranty regarding the cubic zirconia, the buyer had a valid defense against payment existing at the very moment the pawnbroker assigned the contract to the retailer. The pawnbroker breached this implied warranty to the assignee, making him liable to the retailer."
    },
    {
        id: 25,
        topic: "Formation / Illusory Promises",
        fp: "In anticipation of changing over to a more 'upscale' restaurant, a restaurant entered into a written agreement with a new butcher. Under the agreement, the butcher would provide 'as many top quality steaks at $10 per pound as the restaurant decides to order.' A week later, before the restaurant had made its first order, the butcher called the restaurant and said that a sharp rise in the price of cattle feed meant that it was impossible to provide 'top quality' steaks for less than $15 per pound. The butcher said he was willing to provide lower quality steaks if the restaurant wanted to keep the price the same. The restaurant responded that it was already planning to host the National Meat Eater's Convention and could only do so if it had top quality steaks. The restaurant sued the butcher for breach.",
        q: "How should the court rule?",
        opts: [
            "In favor of the restaurant, because of its detrimental reliance.",
            "In favor of the restaurant, because this is a valid requirements contract.",
            "In favor of the butcher, under the doctrine of impossibility.",
            "In favor of the butcher, because the restaurant's promise is illusory."
        ],
        ans: 3,
        exp: "A valid requirements contract requires the buyer to commit to purchasing *all* of its actual requirements for a particular good from the seller, which provides necessary consideration. Here, the agreement merely states the butcher will provide as many steaks 'as the restaurant decides to order.' Because the restaurant retained the absolute, unfettered discretion to order nothing at all and was not strictly bound to purchase its requirements from the butcher, its promise is entirely illusory, rendering the contract void for lack of mutuality of obligation."
    }
];