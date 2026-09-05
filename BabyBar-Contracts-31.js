const examData = [
    {
        id: 1,
        topic: "Third Parties / Delegation of Duties",
        fp: "The defendant's father earned his living as a crop-duster, using an airplane to dust farmers' fields with insecticides for a fee. When he died, he left the business to the defendant. Although the defendant did not know how to fly an airplane and did not personally participate in crop-dusting, she continued to run the business by hiring pilots to fly the crop-dusting planes. Soon after inheriting the business, the defendant entered into a business contract with the plaintiff, a farmer. The terms of the contract required the defendant's company to dust the plaintiff's crop four times per year for a period of four years, at a total price of $10,000 that the plaintiff paid upon signing the contract. The defendant's company performed as agreed for two years. At the end of that period, the defendant sold the entire business to a local pilot, assigning to the pilot the balance of her contract with the plaintiff. All the defendant's employees agreed to work for the pilot. After being notified of the assignment, the plaintiff sued the defendant, asserting that the defendant's sale of the business to the pilot was a breach of the defendant's obligation under the contract because crop-dusting involves a personal service.",
        q: "Which of the following would be the defendant's most effective argument in response to that claim?",
        opts: [
            "An assignment of contract rights includes a delegation of contract duties.",
            "The pilot had more expertise at crop-dusting than the defendant did.",
            "The defendant had never personally participated in dusting the plaintiff's fields.",
            "The defendant's assignment of the plaintiff's contract to the pilot did not impose an additional burden on the plaintiff since there was no change in price."
        ],
        ans: 2,
        exp: "A transfer of contract duties is called a delegation. In general, contract duties are delegable so long as delegation would not prevent the obligee from getting what he or she bargained for. Duties that involve personal services (i.e., that depend upon the obligor's special skills, training, or expertise) are not delegable. However, the fact that the defendant did not herself participate in the activity indicates that the plaintiff did not bargain for her special skills anyway. Thus, the delegation to the pilot would not deprive the plaintiff of what he bargained for, making it a valid delegation."
    },
    {
        id: 2,
        topic: "Defenses / Statute of Frauds (Suretyship)",
        fp: "The shareholder was a major shareholder of the corporation, a retail company. In January, the corporation had cash-flow problems that placed it in danger of insolvency. On January 15, the corporation applied to the bank for a loan, but the bank said that it would lend the money requested only if the shareholder agreed to guarantee payment by the corporation. Fearful of losing her investment in the corporation, the shareholder promised the bank on January 16 that if the corporation did not repay the loan as agreed, the shareholder would do so. On January 17, the bank made the requested loan to the corporation. On May 1, the corporation defaulted in payment, and the bank threatened to force the corporation into bankruptcy. On May 11, in an attempt to save the company, the corporation officials offered to turn some of the corporate assets over to the bank for sale at their market value, with the understanding that if the market value exceeded the amount that the corporation owed the bank, the bank would refund the excess to the corporation. The bank rejected the corporation's offer of May 11 and asserted a claim against the shareholder for repayment of the loan.",
        q: "Which of the following additional facts or inferences, if it were the only one true, would be most likely to lead a court to find in favor of the shareholder?",
        opts: [
            "The shareholder's January 16 promise to pay the corporation's debt was induced by the fear that the corporation could not continue to exist without the loan.",
            "The shareholder's January 16 promise to pay the corporation's debt was not in writing.",
            "The shareholder received nothing of value in return for her January 16 promise to pay the corporation's debt.",
            "The assets that the corporation offered to turn over to the bank on May 11 were sufficient to repay the loan."
        ],
        ans: 1,
        exp: "The Statute of Frauds requires a promise to answer for the debt of another (a suretyship) to be in writing. Since the shareholder's promise was to pay the debt of the corporation if the corporation defaulted, it falls within the Statute of Frauds and would be unenforceable over the shareholder's objection if it was not in writing. Thus, establishing that it was an oral promise provides the shareholder with a strong defense."
    },
    {
        id: 3,
        topic: "Third Parties / Novation vs Assignment",
        fp: "The landlord was the owner of a storefront building that she leased to the tenant for a three-year period. The tenant paid the rent for two years, and then he assigned the balance of his lease to a woman, advising the landlord in writing that the woman would be paying the rent from that point on. For the following five months, the woman paid the rent directly to the landlord. Then the woman moved out and stopped paying rent. If the landlord asserts a claim against the tenant for unpaid rent, which of the following arguments would be most effective in the tenant's defense?",
        q: "Which of the following arguments would be most effective in the tenant's defense?",
        opts: [
            "The landlord's accepting rent from the woman resulted in a novation.",
            "The landlord's accepting rent from the woman resulted in an accord and satisfaction.",
            "By accepting rent from the woman, the landlord impliedly consented to the tenant's assignment to the woman.",
            "A prohibition against assignment of a leasehold interest is a restraint against alienation."
        ],
        ans: 0,
        exp: "Novation is the substitution by mutual consent of a third person for a party to a contract, completely releasing the original party from liability. By assigning to the woman, the tenant agreed to substitute the woman for him. It may be argued that by accepting rent from the woman with the knowledge that the tenant had assigned to her, the landlord consented to the substitution of the woman for the tenant, effecting a novation. Although it is not certain a court would come to that conclusion, it is the only listed argument that could possibly completely discharge the tenant's secondary liability."
    },
    {
        id: 4,
        topic: "Third Parties / Third-Party Beneficiary Rights",
        fp: "The defendant owned a trucking company. His wife, the plaintiff, was a freelance book illustrator. When a book publisher contacted the defendant to discuss the transportation of his products, the defendant promised the plaintiff that he would get the publisher to employ her as a book illustrator for a year. During negotiations with the publisher, the defendant offered the publisher a lower rate if the publisher would do so. The defendant and the publisher subsequently entered into a written one-year contract for the defendant to transport all the publisher's products at a specific low rate. At the same time, the publisher orally agreed that in return for the low rate that the defendant was giving him, he would employ the plaintiff for a year as his book illustrator, starting immediately. When the plaintiff learned of the agreement, she notified all her clients that she could no longer work for them because illustrating books for the publisher would take all her time. For the next six months, the plaintiff did a satisfactory job as the publisher's book illustrator. Then, she and the defendant were divorced. Following the divorce, the defendant told the publisher that he was releasing him from his promise to employ the plaintiff and would give him the same low rate even if the publisher did not continue to employ the plaintiff for the rest of the year. The publisher thereupon discharged the plaintiff from his employ. The plaintiff asserted a claim against the defendant for damages that resulted from his releasing the publisher from the promise to employ the plaintiff for a year.",
        q: "If the defendant's only defense is that he received no consideration for promising the plaintiff that the publisher would employ her for a year, which of the following would be the plaintiff's most effective argument in response to that defense?",
        opts: [
            "The publisher's promise to employ the plaintiff for one year was obtained by the defendant as a gift from the defendant to the plaintiff.",
            "The defendant made an irrevocable assignment to the plaintiff of rights under his contract with the publisher.",
            "No consideration is required to support a promise between husband and wife.",
            "The publisher's promise to hire the plaintiff for one year was given in return for the low rate that the defendant gave him."
        ],
        ans: 0,
        exp: "A promise to make a gift is usually unenforceable for lack of consideration. However, once a gift has been completed, the donee's rights do not depend on the donor's promise, and the executed gift creates an irrevocable right. Because the defendant actually obtained the publisher's binding promise to employ the plaintiff (making her an intended donee beneficiary), the gift of that contract right was completed and delivered. Therefore, the plaintiff can argue that consideration is irrelevant because it was a completed gift of a third-party contract right that had already vested due to her detrimental reliance."
    },
    {
        id: 5,
        topic: "Termination / Revocation by Inconsistent Action",
        fp: "When the seller inherited a valuable painting, he asked the buyer, an art dealer, if she was interested in buying it. On January 15, after looking at the painting, the buyer said that she would not have enough cash to purchase the painting until February 1. At the buyer's request, the seller signed a document containing a written offer to sell the painting to the buyer for $50,000 and a written promise to hold the offer open until February 2. On January 20, the seller sold the painting to someone else for $45,000. The following day, after the buyer read about the sale in a newspaper, she went to the seller's home with $50,000 in cash and demanded that the seller sell her the painting for that price. The seller refused, saying that he was withdrawing his offer.",
        q: "Is the buyer entitled to damages resulting from the seller's sale of the painting to another?",
        opts: [
            "Yes, because she accepted the seller's offer before the seller withdrew it.",
            "Yes, because the seller promised in writing to hold the offer open until February 2.",
            "No, because a judgment for damages is not an appropriate remedy for breach of a contract to sell a unique chattel.",
            "No, because when the buyer tendered payment, she knew that the seller had already sold the painting."
        ],
        ans: 3,
        exp: "An offer terminates when the offeree learns from a reliable source that the offeror has acted in a manner fundamentally inconsistent with the offer (indirect revocation). When the buyer learned from the newspaper that the seller had sold the unique painting to someone else, the seller's offer terminated, depriving the buyer of the power to accept it. (The promise to hold it open was not a firm offer because the seller was not a merchant, and it lacked consideration to be an option contract)."
    },
    {
        id: 6,
        topic: "Terms / Parol Evidence Rule (Trade Usage)",
        fp: "The buyer operated a grocery store in which he sold fresh fish and other food items. The seller was a wholesaler of fresh fish. By a written contract, the buyer and the seller agreed that the buyer would purchase from the seller 100 kilograms per week of a fish known as 'rock lurgid' at a specified price that was higher than the market price of 'scmods,' another type of fish. When the seller made the first delivery under the contract, however, the buyer refused to accept it, complaining that the fish delivered by the seller was scmods, a species unrelated to lurgid. The buyer was aware of the fact that scmods is frequently referred to as 'rock lurgid.' The seller subsequently asserted a breach of contract claim against the buyer. At the trial, the seller attempted to testify that in the fresh fish industry, scmods is frequently referred to as 'rock lurgid.'",
        q: "If the buyer objects, should this testimony be admitted?",
        opts: [
            "No, because it modifies the terms of a written contract that the buyer and the seller intended to be a complete record of their agreement.",
            "No, because the price to which the buyer and the seller agreed is higher than the market price of scmods.",
            "Yes, because the buyer was aware of the fact that scmods is frequently referred to as 'rock lurgid.'",
            "Yes, to explain the meaning of the term 'rock lurgid' as used in the contract."
        ],
        ans: 3,
        exp: "UCC § 2-202 provides that even a completely integrated writing may be explained or supplemented by evidence of usage of trade. Usage of trade is a practice or method of dealing regularly observed in a place, vocation, or trade. The seller's testimony that scmods is referred to as 'rock lurgid' in the fish industry is admissible specifically to explain the meaning of that ambiguous trade term used in the contract."
    },
    {
        id: 7,
        topic: "Third Parties / Incidental Beneficiaries",
        fp: "After serving in the military for 10 years, the plaintiff informed her father that she had gotten married and was retiring from military service. Glad to hear the news, the plaintiff's father said, 'Because that's what I always hoped you would do, I'm going to give you a home as a wedding present.' He showed the plaintiff plans for the construction of a house and promised that he would have it built on a lot that he owned and would deed it to her as soon as it was complete. The plaintiff was so pleased with the plans that her father showed her that she immediately canceled a contract that she had already made for the purchase of a home. The following week, the plaintiff's father contacted the defendant, a builder. The plaintiff's father showed the defendant the plans and asked her to build a house according to those plans so that he could give it to his daughter as a wedding present. By a written contract, the plaintiff's father and the defendant agreed that the defendant would build on the father's lot according to the plans on a cost-plus-profit basis. The plaintiff's father immediately sent a copy of the contract and plans to the plaintiff. The defendant subsequently informed the plaintiff's father that soil conditions would make it necessary to drive piles for the foundation, increasing costs by approximately 600 percent. At the defendant's suggestion, the plaintiff's father and the defendant agreed to the construction of a less expensive house instead, to be based on different plans. When the plaintiff learned about the change, she informed her father and the defendant that she was dissatisfied with their new agreement.",
        q: "If the plaintiff asserts a claim against the defendant as a third-party beneficiary of the original contract between the plaintiff's father and the defendant, what would be the defendant's most effective argument in defense?",
        opts: [
            "The plaintiff was a donee beneficiary because the house was being built as a wedding present for her.",
            "The plaintiff was a creditor beneficiary because the contract between her father and the defendant was made after her father promised the plaintiff that he would give her the house.",
            "The plaintiff did not rely to her detriment on her father's promise to give her a house built according to any particular plans.",
            "The plaintiff was not an intended third-party beneficiary of the contract between her father and the defendant."
        ],
        ans: 3,
        exp: "To enforce a contract, a third party must be an 'intended' beneficiary. If the contract does not require performance to be rendered directly to the third party, they are typically deemed a mere 'incidental' beneficiary with no enforcement rights. Here, the builder was contracted to build the house on the father's lot for the father; the father would subsequently deed it to the daughter. Because the builder's direct contractual performance ran strictly to the father (the owner of the lot), the builder can effectively argue the daughter was not an intended beneficiary of the construction contract itself."
    },
    {
        id: 8,
        topic: "Formation / Solicitations vs Offers",
        fp: "On January 5, because he needed money to pay the rent on his store, the storeowner sent copies of the following letter to four possible buyers: 'I need to sell my heart-shaped diamond ring by January 15 for $1,500. I am making this offer to four possible buyers because all of you have admired the ring. If interested, please contact me before January 15.' On January 14, the storeowner received a letter from the first buyer agreeing to pay $1,500 for the ring. The storeowner did not respond to letter. On January 17, the storeowner received a letter from the second buyer agreeing to pay $1,700 for the ring. On January 17, the storeowner wrote to the second buyer saying, 'I agree to the terms of your letter.'",
        q: "The first buyer asserts a claim against the storeowner on account of the storeowner's refusal to sell the ring to the first buyer for $1,500. Should the court rule in the first buyer's favor?",
        opts: [
            "No, because the offer contained in the storeowner's letter of January 5 was revoked by his letter to the second buyer on January 17.",
            "No, because he did not accept the offer contained in the first buyer's letter.",
            "Yes, because the first buyer complied with the terms of the storeowner's offer.",
            "Yes, because the second buyer's letter was not received by the storeowner until after January 15."
        ],
        ans: 1,
        exp: "An offer creates the power of acceptance. To be an offer, the recipient must reasonably believe that only their assent is necessary to form a binding contract. Because the storeowner's letter explicitly stated it was being sent to 'four possible buyers' for a single unique ring, it must have been obvious that someone else might purchase it first, making it a mere invitation to negotiate rather than a binding offer. Consequently, the first buyer's letter was an offer, which the storeowner simply chose not to accept."
    },
    {
        id: 9,
        topic: "Performance / Demand for Assurances",
        fp: "The defendant was a retailer of home-gardening supplies. On March 1, the defendant entered into a written contract with a wholesaler of seeds. According to the terms, the wholesaler was to furnish the defendant with seeds in 10-pound bags at a specified price. The contract provided that for a period of one year, the defendant would purchase all its seeds from the wholesaler and that the wholesaler would furnish all the seeds required by the defendant. It provided further that the defendant would advise the wholesaler of its requirements by the first of each month, and that the wholesaler would make delivery by the end of that month. The contract was silent about the right to assign or delegate. Upon signing the contract on March 1, the defendant notified the wholesaler of its seed requirements for that month. The wholesaler made a delivery to the defendant on March 17. Prior to April 1, the defendant notified the wholesaler of its requirements for April. On April 20, the wholesaler sold its entire business to the plaintiff, including its contract with the defendant, and notified the defendant of the sale the same day. On April 24, after the defendant received notice of the assignment, the plaintiff delivered the seed that the defendant ordered from the wholesaler. The next day, the defendant wrote to the plaintiff, enclosing a check for the seeds the plaintiff had delivered and demanding that the plaintiff assure the defendant that it would be able to meet the defendant's seed requirements in the future. On June 1, not having heard from the plaintiff, the defendant notified the wholesaler and the plaintiff that it was canceling the contract. The plaintiff asserted a claim against the defendant for breach of contract.",
        q: "Should the court rule in the plaintiff's favor?",
        opts: [
            "Yes, because the defendant failed to order seeds as required by contract.",
            "Yes, because there was no indication that the terms of the contract would not be performed by the plaintiff.",
            "No, because the plaintiff failed to furnish assurances as demanded by the defendant.",
            "No, because requirements contracts are not assignable without consent of the purchaser."
        ],
        ans: 2,
        exp: "Under UCC § 2-609, when a party has reasonable grounds for insecurity, they may demand adequate assurances of due performance and suspend their own performance until received. Furthermore, UCC § 2-210 specifically provides that a delegation of contract duties automatically supplies reasonable grounds for insecurity. Because the business was sold to the plaintiff, the defendant justifiably demanded assurances, and the plaintiff's failure to furnish them constituted a repudiation of the contract."
    },
    {
        id: 10,
        topic: "Third Parties / Beneficiary Rights & Modification",
        fp: "The homeowner hired a painting contractor to paint the homeowner's residence, entering into a valid written contract with the contractor that fixed the price of the job at $5,000 and provided that the contractor would deliver a 'satisfactory result.' Because the contractor wished to give his daughter the money that he received from the job as a wedding gift, a clause of the contract directed the homeowner to pay the money directly to the daughter. After the contractor finished painting the house, he sent the homeowner a bill for $5,000. When the homeowner received the bill, he called the contractor and complained about the paint job, saying that he did not think it was 'satisfactory' as required by the contract. He said, 'I've got half a mind not to pay you at all, but if you'll take $4,500, I'm willing to call it square.' The contractor reluctantly agreed to accept $4,500 payable directly to him because he needed cash. The homeowner paid the $4,500 to the contractor, who did not give any part of it to the daughter. The daughter learned about the contract between the contractor and the homeowner after the contractor received payment from the homeowner.",
        q: "Which of the following most accurately describes the rights of the daughter?",
        opts: [
            "The daughter is entitled to collect $5,000 from the homeowner.",
            "The daughter is entitled to collect $4,500 from the contractor.",
            "The daughter is entitled to collect $5,000 from the homeowner or $4,500 from the contractor, but not both.",
            "The daughter is not entitled to collect anything from either party."
        ],
        ans: 3,
        exp: "The daughter is an intended donee third-party beneficiary of the original contract. However, the original contracting parties are completely free to modify or cancel the contract without the beneficiary's consent until the beneficiary's rights have 'vested.' A beneficiary's rights vest only when they learn of the contract and rely on it, assent to it, or sue upon it. Because the daughter did not even learn about the contract until after her father and the homeowner had already modified/discharged it (by the father taking the $4,500 directly), her rights never vested, and she collects nothing."
    },
    {
        id: 11,
        topic: "Defenses / Statute of Frauds (Merchant's Confirmatory Memo)",
        fp: "A sports retailer called a baseball manufacturer and ordered 600 baseballs at a price of $1 apiece, requesting that they be delivered in 30 days. The manufacturer agreed to sell the retailer the baseballs. After the manufacturer got off the phone, he filled out a written contract with the agreed terms and signed it. He then took a picture of the contract and emailed it to the retailer. The retailer received the email and responded that he had read it. However, when the baseballs arrived 30 days later, the retailer rejected the baseballs even though they conformed to the contract.",
        q: "Under the circumstances, does the manufacturer have a claim against the retailer for breach of contract?",
        opts: [
            "No, because the email did not satisfy the Statute of Frauds.",
            "No, because the retailer never signed any agreement.",
            "Yes, because there was an enforceable contract.",
            "Yes, because the manufacturer delivered conforming goods."
        ],
        ans: 2,
        exp: "Under UCC § 2-201, a contract for the sale of goods for $500 or more generally requires a signed writing by the party to be charged. However, between merchants, a written confirmation sent by one party that binds the sender is sufficient to bind the recipient if the recipient has reason to know of its contents and fails to object in writing within 10 days (the merchant's confirmatory memo rule). Here, the emailed photo of the signed contract served as a valid confirmation, binding the retailer since they acknowledged reading it and did not object."
    },
    {
        id: 12,
        topic: "Formation / Option Contracts",
        fp: "The defendant was an investor who frequently bought and sold real estate on his own account. He had purchased a parcel of realty for $100,000 and was considering selling it. On September 1, the plaintiff, another real estate investor, asked whether the defendant would be willing to accept $125,000 for the property. The defendant said that he would, but only if payment was in cash. When the plaintiff said that he would need a month or two to raise that kind of money, the defendant wrote the following on a sheet of paper and signed it: 'I hereby offer to sell my realty to the plaintiff for $125,000 cash. I promise to hold this offer open until November 1, and I further promise that I will not sell the property to anyone else before then. This is a firm offer.' On October 20, the defendant sold the property to another person for $110,000 and wrote the plaintiff a note in which he said, 'I hereby withdraw my offer to sell you the property for $125,000.' On October 25, the plaintiff purchased the property from the other person for $135,000.",
        q: "Is the plaintiff entitled to damages resulting from the defendant's sale of the property to the other person?",
        opts: [
            "No, because the defendant received no consideration for his promise to keep the offer open.",
            "No, because the defendant sold the realty to the other person more than 30 days after promising the plaintiff to keep the offer open.",
            "Yes, because the document that the defendant signed on September 1 was a firm offer in writing.",
            "Yes, because the plaintiff customarily engaged in buying and selling real estate."
        ],
        ans: 0,
        exp: "The UCC firm offer rule (which makes signed, written offers by merchants irrevocable without consideration) strictly applies only to the sale of goods (Article 2). Because this transaction involves the sale of real estate, the common law applies. Under common law, an offeror can revoke an offer at any time prior to acceptance unless the promise to hold the offer open is supported by independent consideration (an option contract). Since the plaintiff provided no consideration to keep the offer open, it was freely revocable."
    },
    {
        id: 13,
        topic: "Third Parties / Assignment vs. Incidental Beneficiaries",
        fp: "When he won the state lottery, the defendant bought a new home and decided to have it landscaped by a well-known landscape architect. After investigating several sources, the defendant learned that the landscaper was one of the most famous landscape architects in the world. Following a series of discussions, the defendant and the landscaper entered into a written contract that called for the landscaper to design and execute a landscaping plan for the defendant's property at a total price of $90,000. Upon completion of the job, the defendant was to pay $80,000 of this sum directly to the landscaper. The defendant agreed to pay the balance of $10,000 to the plaintiff because the landscaper was indebted to the plaintiff for that sum. A clause of the contract provided that 'there shall be no assignment of rights under this contract.' The landscaper's design called for a moat to be dug around the defendant's house and planted with aquatic plants. Although the landscaper completed the rest of the job himself, he hired an earthmoving subcontractor to dig the moat, which the earthmoving subcontractor did in complete conformity with the landscaper's plan. When the job was completed, the plaintiff executed a document purporting to assign his rights under the contract to another person. The entire job was completed in a reasonably workmanlike manner, but the defendant refused to make any payment under the contract. The plaintiff asserts a claim against the defendant for $10,000, which the plaintiff claims the defendant owes him under the contract.",
        q: "Which of the following would be the defendant's most effective argument in defense against that claim?",
        opts: [
            "The plaintiff has made a valid assignment of his rights under the contract.",
            "The plaintiff was not a party to the contract.",
            "The plaintiff was a mere incidental beneficiary of the contract.",
            "There was no mutuality of obligation between the defendant and the plaintiff."
        ],
        ans: 0,
        exp: "An assignment perfectly transfers the assignor's rights to the assignee, totally extinguishing the assignor's own direct legal rights to enforce the underlying contract. Because the plaintiff (who was an intended creditor beneficiary of the original contract) executed a document actively assigning his rights to receive the $10,000 to another person, the plaintiff no longer holds the legal standing to personally enforce those rights against the defendant."
    },
    {
        id: 14,
        topic: "Remedies / Expectation Damages (Cost of Completion)",
        fp: "A manufacturer needed a new factory and purchased a parcel of realty on which he wished to have it constructed. After negotiation, the manufacturer entered into a valid written contract with a licensed builder. Pursuant to its terms, the builder was to construct a two-story building on the manufacturer's realty according to specifications furnished by the manufacturer, at a total price of $250,000 to be paid in full upon completion of the building. The builder completed the building, and the manufacturer paid him $250,000, but subsequently the manufacturer learned that the building failed to conform to the specifications. As a result, it would not serve the manufacturer's purpose. The building had the same value as if constructed in conformity with the specifications, but it would cost the manufacturer $12,000 to make it conform to the specifications. Because of an increase in the costs of construction, it would cost $350,000 to construct a new building in conformity with the specifications.",
        q: "If the manufacturer asserts a claim against the builder for breach of contract, what is the manufacturer entitled to recover?",
        opts: [
            "Nothing, because the building had the same value as if built in conformity with the specifications.",
            "$12,000 (the cost of making the building conform to the specifications).",
            "$100,000 (the difference between the contract price and the cost of having a new building constructed in accordance with the specifications).",
            "$250,000 (the contract price)."
        ],
        ans: 1,
        exp: "Expectation damages are meant to put the non-breaching party in the position they would have been in had the contract been properly performed. In construction cases where a defect can be remedied, the standard measure of damages is the cost to complete or repair the defective work, unless that cost is grossly disproportionate to the actual economic benefit it would provide (economic waste). Here, $12,000 is a reasonable cost to make the building actually serve the manufacturer's required purpose, putting him exactly in the bargained-for position."
    },
    {
        id: 15,
        topic: "Formation / Solicitations vs Offers",
        fp: "The seller wanted to sell his piano. Because four buyers had all expressed interest in it, the seller wrote and signed the following letter on May 1, sending a photocopy to each of the persons named: 'Dear Four Potential Buyers: I know that you are all interested in buying my piano and I need to sell it. I therefore promise to sell it to whichever of you makes the highest offer prior to June 15. (signed)'",
        q: "What is the best description of the seller's letter of May 1?",
        opts: [
            "A firm offer.",
            "An invitation for offers.",
            "An option to purchase that was given to Able, Baker, Carr, and Davis but could only be exercised by the first to respond.",
            "An auction."
        ],
        ans: 1,
        exp: "An offer must manifest a present intent to be bound, giving the offeree the power to conclude the deal by simply saying 'I accept'. Because the seller sent the letter to four different people and specifically requested that they make 'the highest offer,' it is obvious that no single recipient could create a contract just by accepting. The letter is merely soliciting competing bids, making it an invitation for offers (preliminary negotiations)."
    },
    {
        id: 16,
        topic: "Remedies / Impossibility and Restitution",
        fp: "On January 17, a homeowner hired a builder to build a new greenhouse on his property. After negotiation, they entered into a valid written contract that fixed the price at $8,000. Work was to be completed by March 1. On February 1, when the greenhouse was one-quarter complete, it was totally destroyed in a freak snowstorm. The damage made it impossible to complete construction by March 1. Because he was scheduled to begin construction on a new hotel on March 2, the builder informed the homeowner that he would perform no further work on the greenhouse. The homeowner subsequently hired a second builder, who agreed to build the greenhouse for $9,000. The first builder sued the homeowner on a quasi-contract theory, seeking compensation for the services that he rendered prior to the storm.",
        q: "What is the first builder entitled to receive?",
        opts: [
            "The reasonable value of the work performed by the first builder, less the difference between the price that the homeowner had agreed to pay the first builder and the price that the homeowner agreed to pay the second builder.",
            "The reasonable value of the work performed by the first builder.",
            "One-quarter of the price that the homeowner agreed to pay the first builder for the completed greenhouse.",
            "Nothing, since the homeowner has received no benefit from the first builder's work."
        ],
        ans: 3,
        exp: "When a new structure under construction is completely destroyed by an unforeseeable event without fault, the builder's performance may be temporarily excused under impossibility, but their refusal to rebuild entirely leaves their only potential remedy in quasi-contract (restitution). Restitution strictly requires that the defendant received and retained a measurable, tangible benefit to prevent unjust enrichment. Because the partially built greenhouse was totally destroyed before completion or use, the landowner derived absolutely no benefit from the builder's work, meaning the builder recovers nothing."
    },
    {
        id: 17,
        topic: "Performance / Right to Inspect (UCC)",
        fp: "The buyer agreed to purchase 300 commercial-grade metal screws from the seller by a written contract that provided that the buyer would make payment prior to inspection. The screws were delivered by truck and were in a closed box. The buyer paid the truck driver before inspecting the screws. Upon subsequent inspection, however, the buyer discovered the screws were of domestic rather than commercial grade. The buyer called the seller, offering to return the screws and demanding return of his money. The seller refused to take the screws back or give the buyer a refund.",
        q: "Which of the following is most correct about the effect of the buyer's payment prior to inspection?",
        opts: [
            "The terms of the contract required an unconditional acceptance prior to inspection, and payment constituted unconditional acceptance.",
            "Even if the contract provision calling for payment prior to inspection was invalid, payment resulted in a waiver of the right to inspect prior to acceptance.",
            "Payment did not impair the buyer's right to inspect the goods prior to acceptance.",
            "Payment constituted acceptance, but the buyer was entitled to revoke acceptance within a reasonable time thereafter."
        ],
        ans: 2,
        exp: "Under UCC § 2-512(2), if a contract specifically calls for payment prior to inspection, making such payment does not constitute a final acceptance of the goods, nor does it impair the buyer's right to subsequently inspect the goods or assert any remedies for non-conformity. Because the buyer merely fulfilled the contractual sequence, he fully preserved his right to reject the defective screws post-inspection."
    },
    {
        id: 18,
        topic: "Formation / Unilateral Contract Option",
        fp: "On August 1, a cell phone manufacturer posted a notice in the employee lounge offering $200 to any employee who could design a 'killer app' by November 1, in time for the Christmas gift-buying season. A designer employed by the manufacturer saw the notice and immediately began working on a new phone application in his spare time. On September 1, the manufacturer removed the old sign and posted a new notice that said, 'The offer of a cash prize for a 'killer app' is hereby withdrawn.' On October 1, the designer submitted his design for a 'killer app,' which was eventually adopted for use by the manufacturer. The manufacturer refused to pay any money to the designer. The designer asserts a claim against the manufacturer in a jurisdiction that accepts the view expressed in the Restatement (Second) of Contracts.",
        q: "What is the designer's most effective argument?",
        opts: [
            "A bilateral contract was formed when the designer submitted the design that the manufacturer eventually adopted.",
            "The designer relied on the offer contained in the first notice by working on the design in his spare time prior to September 1.",
            "The promises contained in the first notice could not be withdrawn until November 1.",
            "The company's attempt to withdraw its offer was unconscionable."
        ],
        ans: 1,
        exp: "Under Restatement (Second) of Contracts § 45, an offer for a unilateral contract becomes temporarily irrevocable (creating an option contract) once the offeree actually begins the requested performance. Because the designer began working on the application in his spare time prior to the September 1 revocation, the offer became irrevocable, securing his right to finish and claim the prize by the November deadline."
    },
    {
        id: 19,
        topic: "Consideration / Moral Obligation",
        fp: "A hiker was hiking in the woods when she heard a cry for help. She then saw a climber hanging from the edge of a cliff, clearly about to fall. The hiker ran to the cliff's edge and pulled the climber to safety. The climber was so happy that he said, 'In token for saving my life, I promise to pay you $100 the first of next month.' A few days later, the climber died falling from another cliff. The jurisdiction has a 'Good Samaritan' statute. The hiker institutes an action against the executor of the climber's estate for the $100 that the climber promised to pay her.",
        q: "Is the hiker entitled to the money?",
        opts: [
            "Yes, because the jurisdiction has a 'Good Samaritan' statute.",
            "Yes, because she detrimentally relied on the climber's promise to pay her.",
            "No, because the climber's promise was unsupported by consideration.",
            "No, because it is impossible to calculate the value of the hiker's services."
        ],
        ans: 2,
        exp: "Usually, a promise is unenforceable unless it is supported by consideration, which requires a bargained-for exchange. Since the climber's promise was made after the hiker rendered a life-saving service with no apparent expectation of compensation, the service was not given in exchange for the promise (past consideration). Therefore, the promise is unsupported by valid consideration and generally unenforceable."
    },
    {
        id: 20,
        topic: "Remedies / Incidental Damages",
        fp: "A parts dealer agreed to deliver a special bumper to a car collector's home for $150. After the contract was signed, the dealer called the collector and told him that he would not deliver the special bumper as agreed. The collector succeeded in buying another one like it in another town for $130, incurring reasonable travel expenses of $20 in going to pick it up. In an action by the collector against the dealer, the collector seeks damages.",
        q: "What recovery would the collector be entitled to?",
        opts: [
            "$20.",
            "$40.",
            "$170.",
            "Nothing."
        ],
        ans: 0,
        exp: "When a seller breaches, the buyer's compensatory damages typically consist of the difference between the contract price and the 'cover' price, plus incidental damages. If the cover price ($130) is less than the contract price ($150), the buyer suffers zero compensatory damages from the breach itself. However, the buyer is still entitled to recover reasonable incidental expenses incurred in effecting cover, which here were the $20 in travel expenses. Total recovery is $20."
    },
    {
        id: 21,
        topic: "Third Parties / Modification Before Vesting",
        fp: "When his daughter was about to turn 21, a builder decided he wanted to give her some money so she could buy a new car. Consequently, the builder entered into a written contract with a homeowner to build a new addition. In return, the homeowner agreed to pay the sum of $5,000 to the builder's daughter on her birthday upon completion of the work to his satisfaction. A few weeks before her birthday, the builder's daughter married a circus clown, and the builder did not approve. The builder asked the homeowner to pay the $5,000 to him directly, which he did. On her birthday, the builder's daughter learned for the first time of the written agreement between her father and the homeowner. The daughter then commences a lawsuit against the homeowner.",
        q: "Will the lawsuit succeed?",
        opts: [
            "No, because she gave no consideration for the homeowner's promise to pay her.",
            "No, because the payment by the homeowner to the builder was the result of an effective oral modification of the written contract.",
            "Yes, because the daughter is an intended donee beneficiary of the contract between the builder and the homeowner.",
            "Yes, because the written contract between the builder and the homeowner operated as an assignment to the daughter of the builder's right to payment."
        ],
        ans: 1,
        exp: "A donee third-party beneficiary of a contract may enforce it, but the original parties are free to modify or cancel that contract anytime prior to the beneficiary's rights 'vesting.' Rights vest only when the beneficiary learns of and detrimentally relies on the contract, brings suit, or explicitly assents. Since the daughter did not even learn of the contract until after her father and the homeowner modified it to exclude her, her rights never vested, making the modification valid and extinguishing her claim."
    },
    {
        id: 22,
        topic: "Performance / Risk of Loss (FOB Origin)",
        fp: "By a written agreement, a university agreed to buy 100 air conditioners from a company at a price of $250 each, FOB the company's factory. On June 1, the company loaded the air conditioners on a truck owned by an independent trucking company. The company informed the university that the air conditioners were on their way. Later that day, the company assigned its rights under the contract to a parts manufacturer to which it owed money. The university consented to this assignment. On June 2, en route to the university, the truck fell off a bridge and the entire shipment was destroyed. In an action by the university against the company for damages resulting from the non-delivery of the air conditioners, the company presents its defense.",
        q: "Which of the following would be the company's most effective argument in defense?",
        opts: [
            "There has been a valid assignment to the parts manufacturer.",
            "The risk of loss passed to the university when the air conditioners were loaded onto the truck.",
            "The risk of loss passed to the trucking company when the air conditioners were loaded onto the trucking company's truck.",
            "Performance of the contract was made impossible by the destruction of the air conditioners."
        ],
        ans: 1,
        exp: "In an 'FOB origin' (or shipment) contract, such as 'FOB the company's factory,' the risk of loss passes to the buyer as soon as the goods are properly delivered to the carrier. Once the air conditioners were loaded onto the independent trucking company's truck, any loss not resulting from the fault of the seller became the university's liability. The university is thus not entitled to damages for non-delivery resulting from a transit loss."
    },
    {
        id: 23,
        topic: "Formation / Acceptance of Part as Rejection of Whole",
        fp: "The seller's grandfather left her a collection of the first 30 Super Jimmy comics, the only Super Jimmy comics in existence. The seller sold some comics and pop art in her art gallery, so she made up a catalog showing pictures of the 30 comics, and on August 1, she sent a copy of the catalog to a comic book dealer with a note: 'I know how much you love Super Jimmy, so I wanted to give you a chance to buy some of the comics before I offer them to any other dealers or collectors. The price is $200 per comic book, no matter how many you buy. Email me your order within two weeks, or I'll put them on the market.' On August 2, the dealer sent the seller an email that said, 'I accept your offer to sell Super Jimmy Number 30 for $200. I will come to your house in two days to pick up the comic and will pay you cash at that time.' On August 3, after receiving the email, the seller telephoned the dealer and said that because of favorable publicity that the collection had received, she would not sell Super Jimmy Number 30 for less than $300. The dealer agreed on the telephone to pay $300 for comic Number 30. On August 4, the dealer sent an email to the seller that said, 'I accept your offer to sell Super Jimmy comics 1 through 29 for $200 each. I will pick up the comic books tomorrow and will pay for them at that time.' On August 5, the dealer showed up at the seller's home and tendered payment of $200 each for all 30 comic books, but the seller refused to sell her any of the comics except for Number 30, for which the seller insisted the agreed price was $300. The dealer left without buying it. The dealer sued for an order directing the seller to sell the dealer comics 1 through 29 for $200 each.",
        q: "Which of the following would be the seller's most effective argument in defense against that action?",
        opts: [
            "Since the dealer is a comic book dealer, there is an adequate remedy at law.",
            "The seller's August 1 promise to keep the offer open for two weeks was unsupported by consideration.",
            "The dealer's email of August 2 was a rejection of the seller's offer to sell comic books 1 through 29.",
            "The catalog and the seller's cover letter were mere invitations to negotiate."
        ],
        ans: 2,
        exp: "Since the seller's offer was for the sale of 'any or all' of the comics, the dealer could have accepted by promising to purchase the entire lot. However, by specifically agreeing to purchase only one comic (Number 30), the dealer's August 2 telegram effectively operated as a rejection of the seller's offer to sell the remaining 29 comics. Once an offer is rejected, the offeree's power of acceptance is destroyed, rendering her August 4 'acceptance' of comics 1-29 completely ineffective."
    },
    {
        id: 24,
        topic: "Acceptance / Order as Offer (UCC)",
        fp: "An importer of arts and crafts products from Russia sold his products mainly to department stores and import shops. To keep his sales force down, the importer did most of his selling by sending catalogs describing products and prices to prospective customers and taking orders by mail on forms provided with the catalogs. The forms contained the phrase '10 percent discount on COD orders only.' After receiving one of the catalogs, a coffee shop owner decided to order some Russian coffeepots for sale in her store. The shop owner had been doing business with the importer on an 'open account' basis. On July 27, she typed the following across the importer's order form: 'Send immediately 50 Russian coffeepots at 10 percent discount. Payment within 10 days of receipt and acceptance.' The importer received the order on July 29. On July 30, the importer shipped 50 coffeepots to the shop owner, who received and accepted them on August 3. On July 31, the importer wrote to the shop owner, 'I am shipping pursuant to your request and will expect payment within 10 days. Since discounts apply only to COD shipments, you are herewith billed at full price.' The shop owner received the letter and enclosed bill on August 4. On August 5, the shop owner sent the importer a check in payment of the amount billed, less 10 percent.",
        q: "If the importer asserts a claim against the shop owner for the balance of the amount billed, should the court find in the importer's favor?",
        opts: [
            "Yes, because the shop owner's order was on the importer's order form.",
            "Yes, because the shop owner was aware that the importer's catalog and order form specified that the 10 percent discount applied only to COD shipments.",
            "No, because the shop owner had been doing business with the importer on an 'open account' basis.",
            "No, because the importer accepted the shop owner's offer to purchase at a 10 percent discount."
        ],
        ans: 3,
        exp: "A catalog is generally a mere invitation to negotiate. The shop owner's order form specifying the item, price (with discount), and payment terms constituted the legal offer. Under UCC § 2-206(1)(b), an order to buy goods for prompt shipment can be accepted by prompt shipment of the goods. By shipping the coffeepots on July 30, the importer legally accepted the shop owner's explicit offer (including the 10% discount term), rendering his subsequent letter demanding full price ineffective as a unilateral modification."
    },
    {
        id: 25,
        topic: "Remedies / Divisible Contracts Offset",
        fp: "A landowner wanted to open a miniature golf course on a parcel of real estate that he owned. After negotiation, the landowner hired a builder to build the golf course and a waterslide. The landowner and the builder entered into a written contract by which the builder agreed to begin construction on August 1, to be finished with everything except the waterslide by November 1, and to complete construction of the waterslide by December 15. The contract price was $150,000 to be paid as follows: $50,000 on August 1; $50,000 upon completion of everything but the waterslide; and the balance of $50,000 upon completion of the waterslide. The builder began work on August 1, after receiving $50,000 from the landowner. By November 1, the builder completed construction of everything but the waterslide in accordance with the specifications. The landowner paid $50,000 to the builder on November 1, and the builder began construction of the waterslide, but before it was completed, the builder informed the landowner that he would not finish the job.",
        q: "Which of the following statements is correct concerning the landowner's rights against the builder?",
        opts: [
            "The landowner may recover all payments that he has made to the builder.",
            "The landowner may recover from the builder the reasonable cost of completing the waterslide.",
            "The landowner may recover all payments that he has made to the builder and the reasonable cost of completing the waterslide.",
            "The landowner is not entitled to recover the payments or the reasonable cost of completing the waterslide."
        ],
        ans: 3,
        exp: "When a builder anticipatorily repudiates, the owner is entitled to damages measured by the cost of completing the work minus any unpaid balance of the contract price. Here, the landowner still holds $50,000 of the original contract price intended for the waterslide. If the cost of completing the waterslide is less than or equal to the unpaid $50,000, the landowner has suffered no net financial damage from the breach. Thus, the landowner is not entitled to simply recover the gross cost of completion or refund prior payments for work already completed."
    }
];