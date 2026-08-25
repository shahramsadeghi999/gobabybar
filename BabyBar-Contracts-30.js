const examData = [
    {
        id: 1,
        topic: "Consideration / Pre-existing Duty Rule",
        fp: "A group of workmen signed contracts at a fixed rate to work on a ship during the salmon-canning season, as the ship went from San Francisco to Alaska and back. When the ship arrived in Alaska, the workmen told the captain that they would not do any more work unless the captain gave them a very substantial increase in salary. Since the captain had nowhere to go to get replacement men, he agreed. The workmen then worked on the way back to San Francisco. When the captain refused to pay the extra money, the workmen sued. Are the workmen entitled to the extra money?",
        q: "Are the workmen entitled to the extra money?",
        opts: [
            "Yes, because they relied on the captain's promise of an increased salary.",
            "Yes, because parties can renegotiate a contract based on a change in conditions.",
            "No, because the captain agreed to the salary increase while under duress.",
            "No, because the workmen had a preexisting duty to work on the way back to San Francisco."
        ],
        ans: 3,
        exp: "Under the preexisting duty rule, if someone does or promises to do something that he or she is already legally obligated to do, it does not incur a sufficient detriment to count as consideration[cite: 32]. Most courts hold that where one party promises another that he or she will do what he or she is already legally obligated to do, the promise is not a detriment sufficient for consideration to prevent unfair advantage[cite: 32]. Thus, the agreement for extra pay is unenforceable under the preexisting duty rule[cite: 32]."
    },
    {
        id: 2,
        topic: "Performance / Conditions",
        fp: "The seller was the owner of a lot and building that contained two residential apartments. The seller resided in the upstairs apartment and rented the downstairs apartment to a tenant and his family on a month-to-month basis. The buyer was interested in purchasing the realty from the seller. After negotiations, the buyer and the seller entered into a written contract that provided that the seller would sell the house to the buyer for $60,000 and that delivery of title was to occur on or before August 1. The seller promised that at the time title was delivered, the upstairs apartment would be vacant and that the downstairs apartment would be vacant within three months thereafter. The buyer promised to pay $58,000 upon delivery of title, and the balance of $2,000 three months after delivery of title. The contract provided that 'The buyer's obligation to pay $2,000 three months after delivery of title shall be voided if the downstairs apartment has not been vacated by that time.'",
        q: "Which of the following statements concerning the order of performances is LEAST accurate?",
        opts: [
            "The seller's delivery of title on or before August 1 and the buyer's payment of $58,000 are concurrent obligations.",
            "Vacancy of the upstairs apartment is a condition precedent to the buyer's obligation to pay $58,000 upon delivery of title.",
            "Payment by the buyer of $58,000 is a condition precedent to the seller's obligation to deliver title to the premises.",
            "Payment by the buyer of $2,000 is a condition subsequent to the seller's obligation to have the downstairs apartment vacated within three months after the delivery of title."
        ],
        ans: 3,
        exp: "A condition subsequent is an event which, by agreement of the parties, discharges a duty of performance that had already become absolute[cite: 32]. The language of the sales agreement makes it clear that the seller's promise to have the downstairs apartment vacated was to be performed prior to payment of the final $2,000 by the buyer[cite: 32]. Since it could not be undone once it was performed, there can be no condition subsequent to it[cite: 32]."
    },
    {
        id: 3,
        topic: "Formation / Unilateral Contract Acceptance",
        fp: "A woman had a large tree in her backyard that was in danger of falling down on her house. The woman became worried when she read a weather report stating that a big storm was going to hit the town on Monday. The woman texted a friend of hers who worked as a landscaper and texted, 'If you take that dangerous tree down by Sunday, I will pay you $500.' On Saturday, the woman looked out her window and saw the friend trimming the lower branches off the tree to take it down. The woman went to her neighborhood pool and returned that evening. When she went into the backyard, she saw that about half of the tree had been taken down. Stuck under a rock was a note that said, 'I need to get a big ladder. I'll be back first thing Monday morning.' Neither the storm nor the friend arrived on Monday. A week later, the friend still hadn't returned. The woman sued the friend for breach of contract.",
        q: "Should the court rule in the woman's favor?",
        opts: [
            "Yes, because the friend's part performance implied acceptance of the contract.",
            "Yes, under the doctrine of equitable estoppel.",
            "No, because the friend never accepted the woman's offer.",
            "No, because the friend still had time to cure."
        ],
        ans: 0,
        exp: "The part performance of a unilateral contract implies an enforceable promise to complete it if the offer was for one complete contract, the offeree did part of the actual performance of the contract and not mere preparation, and the offeror knew of the offeree's beginning of performance[cite: 32]. Because the friend actually took down part of the tree and the woman saw him working on it, he accepted the offer by beginning performance and breached when he failed to finish by the agreed time[cite: 32]."
    },
    {
        id: 4,
        topic: "Consideration / Promissory Estoppel",
        fp: "After seeing the small airplane that the pilot was flying go down in stormy seas, the pilot's wife stood on the shore screaming, 'Oh, God, won't somebody please save my husband?' Upon hearing her appeal for help, the plaintiff went out in his rowboat and succeeded in rescuing the pilot. The plaintiff subsequently asked the pilot's wife to pay him for his trouble, but she refused.",
        q: "If the plaintiff asserts a claim for payment against the pilot's wife on a theory of promissory estoppel, which of the following would be the pilot's wife's most effective argument in defense?",
        opts: [
            "The plaintiff was an officious intermeddler.",
            "The value of the pilot's life is too speculative.",
            "No promise of payment can be reasonably inferred from the wife's cry for help.",
            "There was no consideration for the wife's promise."
        ],
        ans: 2,
        exp: "A promise that is unenforceable for lack of consideration may nevertheless be enforceable under the doctrine of promissory estoppel if the promisee justifiably relied upon it to his or her detriment[cite: 32]. If, however, no express or implied promise was made to the plaintiff, then promissory estoppel is not applicable[cite: 32]. The wife's desperate exclamation was a cry for help, from which no promise of payment could be reasonably inferred[cite: 32]."
    },
    {
        id: 5,
        topic: "Formation / Solicitations vs Offers",
        fp: "The buyer was a collector of antiques who had purchased many expensive pieces from the seller, an antiques dealer. Knowing that the seller was traveling to Europe, the buyer wrote to him on March 11, 'If you should come across a good piece in your travels, please purchase it for me. I don't care about the cost.' On April 17, the seller wrote to the buyer, 'I have found an excellent settee. The price is $15,000, but I think it's a good buy. Are you still interested? If so, let me know if the price is acceptable to you.' The buyer received the seller's letter on April 21, and, on that same day, texted the seller, 'Fifteen thousand is OK. Buy the piece on my account.' Soon thereafter, the seller sold the piece to another collector who offered more money.",
        q: "If a court determines that the seller's letter of April 17 was not an offer, what is the most likely reason?",
        opts: [
            "The letter was an acceptance of the offer contained in the buyer's letter of March 11.",
            "The letter did not specify the terms of payment.",
            "The letter did not manifest a willingness to be bound.",
            "The letter did not specify a manner of acceptance."
        ],
        ans: 2,
        exp: "An offer is a manifestation of the offeror's willingness to enter into a contract on the terms specified, creating an immediate power of acceptance[cite: 32]. The language used by the seller—'Are you still interested?' and 'let me know if the price is acceptable'—leaves some doubt about whether the letter expressed a willingness to be bound without further negotiation[cite: 32]. Thus, the most likely reason it is not an offer is that it lacks the requisite manifestation of intent to be legally bound[cite: 32]."
    },
    {
        id: 6,
        topic: "Discharge / Novation",
        fp: "A man entered into a written contract with a painter to repaint his house. A week later, the painter had a family emergency and had to go take care of a relative in another state. The painter asked the man if he would be willing to have a contractor come in and perform the contract. The painter assured the man that the contractor had similar experience and skills. All of the parties agreed, and the contractor performed the contract. Several months later, the paint started peeling off the man's house because the contractor had used the wrong kind of paint. The man talked to his neighbor, an attorney, and told him that he'd rather sue the painter than the contractor because the painter had sufficient money to pay for the damages to the house.",
        q: "What advice should the attorney give the man?",
        opts: [
            "The painter isn't liable because there was a novation.",
            "The painter isn't liable because there was no written agreement saying that he would indemnify the contractor for any alleged damages.",
            "The painter is liable because he didn't give the man any consideration for releasing him from his obligation under the contract.",
            "The painter is still liable based on the original contract."
        ],
        ans: 0,
        exp: "A novation is an agreement to substitute a third party for one of the parties to the contract, releasing the original obligor from liability[cite: 32]. Because all of the parties—the man, the painter, and the contractor—agreed to substitute the contractor for the painter, there was a novation[cite: 32]. A novation completely releases the original obligor from liability under the contract[cite: 32]. Therefore, the painter is no longer liable for the contractor's defective work[cite: 32]."
    },
    {
        id: 7,
        topic: "Formation / Illusory Promises",
        fp: "A restaurant chain was interested in having a local bakery bake cakes for its restaurants. The bakery also had a small counter and coffee shop for customers and it was afraid to run out of cakes for the coffee shop. The restaurant told the bakery that it recognized the bakery's potential problem, so the restaurant sent the bakery a signed written agreement stating that the restaurant would buy all of the cakes it needed from the bakery and the bakery would sell the restaurant all of the cakes it wanted to sell. The bakery agreed, signed the contract, and sent it back to the restaurant. A week later, the restaurant sent an order for 100 cakes. The bakery said it couldn't fill the order because there was a home football game and it wanted to have a lot of cakes on hand to sell to tailgating parties. The restaurant sued the bakery to enforce the contract.",
        q: "Should the court rule in the restaurant's favor?",
        opts: [
            "Yes, because the agreement was a valid requirements contract.",
            "Yes, because both parties signed the written agreement.",
            "No, because there was no quantity term in the written agreement.",
            "No, because the contract was illusory."
        ],
        ans: 3,
        exp: "A contract is illusory and unenforceable when one of the parties doesn't actually agree to do anything[cite: 32]. Here, the bakery agreed to sell 'all of the cakes it wanted to sell.'[cite: 32] The contract is illusory because the bakery retained the absolute discretion to decide it didn't want to sell any cakes at all, which is exactly what it did[cite: 32]. This lack of mutuality of obligation renders the contract unenforceable[cite: 32]."
    },
    {
        id: 8,
        topic: "Remedies / Impossibility and Restitution",
        fp: "By a valid written contract formed on May 7, the builder agreed to construct a warehouse for the landowner. Pursuant to the terms of the contract, the building was to be completed no later than November 30. The agreed price was $60,000, of which the landowner was to pay $20,000 when the construction was 50 percent complete and the balance upon completion. The builder began work on May 11 and had completed 25 percent of the construction by June 5, when the partially finished structure was struck by lightning and completely destroyed in the resulting fire. No payment had yet been made by the landowner to the builder. On June 7, the builder notified the landowner that he was too busy to rebuild the structure and that he would not continue to work on the project. The landowner subsequently hired another contractor to build the warehouse at a lower price and rejected all the builder's demands for payment.",
        q: "What can the builder recover if he asserts a claim against the landowner?",
        opts: [
            "The difference between $60,000 and the price that the landowner paid to have the warehouse built by another contractor.",
            "The reasonable value of the work performed by the builder prior to the destruction of the structure by lightning and fire.",
            "25 percent of $60,000 ($15,000).",
            "Nothing."
        ],
        ans: 3,
        exp: "If the circumstances that resulted in destruction of the structure excused performance by the builder, his refusal to continue was not a breach, but his only remedy would be in quasi-contract[cite: 32]. Even a breaching builder may be entitled to a quasi-contract remedy if the owner received some benefit[cite: 32]. However, in either event, the builder's recovery would be limited to the value of the benefit received by the landowner[cite: 32]. Since this was a contract for a new structure, and the structure was completely destroyed before completion, the landowner received no benefit[cite: 32]. Thus, the builder is entitled to no recovery[cite: 32]."
    },
    {
        id: 9,
        topic: "Performance / Condition Precedent",
        fp: "When the defendant's employers transferred him to the West Coast, they promised to pay all his relocation expenses, including any commission that he might have to pay for the sale of his home. The defendant contacted the plaintiff, a real estate broker, and entered into a written contract with her on September 1. Under its terms, the defendant agreed that if the house was sold to any buyer who made an offer during the following two months, he would pay the plaintiff upon the closing of title a commission equivalent to 6 percent of the actual selling price of the house. In return, the plaintiff agreed to make reasonable efforts to find a buyer for the house at a price of $80,000. On September 15, after the plaintiff showed the defendant's home to the buyer, the buyer offered to purchase it for $75,000, on condition that title would close on or before December 1. On September 18, the defendant accepted the buyer's offer. On September 19, the buyer gave the defendant $10,000 as a deposit. On November 15, the buyer notified the defendant that he had changed his mind and would not go through with the purchase of the house, agreeing to forfeit the deposit that he had paid in return for the defendant's agreement not to sue for damages. The following day, the defendant entered into a contract to sell the house to another buyer for $80,000. The defendant subsequently rejected the plaintiff's demand for payment.",
        q: "What can the plaintiff collect if she institutes a claim against the defendant for her commission?",
        opts: [
            "$4,800 (6 percent of $80,000).",
            "$4,500 (6 percent of $75,000).",
            "$600 (6 percent of $10,000).",
            "Nothing."
        ],
        ans: 3,
        exp: "A condition precedent to a contractual obligation is an event that must occur before a party will be under a duty to perform[cite: 32]. The contract specifically stated that the commission was due 'upon the closing of title'[cite: 32]. Although the plaintiff found a buyer during the agreed period, the house was not sold to that buyer because title did not close[cite: 32]. Since there was a failure of this condition precedent, the defendant's obligation to pay the commission never became absolute, and the plaintiff collects nothing[cite: 32]."
    },
    {
        id: 10,
        topic: "Terms / Modification (Unanticipated Circumstances)",
        fp: "A trash collector contracted with the city to collect garbage. Although the contract entitled the collector to $150,000 for five years, the collector requested an additional $10,000 a year from the city council because his operating costs had substantially increased due to an unanticipated 'explosion' of new development. The city made the payments. A citizen then sued to have the additional payments refunded to the city.",
        q: "Should the additional payments be refunded to the city?",
        opts: [
            "No, because the city council agreed to the additional $10,000 a year.",
            "No, because there was a valid modification of the contract.",
            "Yes, because the collector had a preexisting duty to collect the city's garbage.",
            "Yes, because the collector took unfair advantage of the city by requesting more money to pick up the trash."
        ],
        ans: 1,
        exp: "Under Restatement (Second) of Contracts § 89(a), a modification to a common law contract is binding even without new consideration if it is 'fair and equitable in view of circumstances not anticipated by the parties when the contract was made'[cite: 32]. Here, the modification was fair and equitable, voluntarily entered into, and motivated by an unanticipated 'explosion' of new development making costs rise substantially[cite: 32]. Thus, it was a valid modification despite the preexisting duty rule[cite: 32]."
    },
    {
        id: 11,
        topic: "Third Parties / Vesting of Rights",
        fp: "The defendant and his wife were co-owners of a parcel of realty. After 25 years of marriage, they decided to execute wills. Before executing the wills, they agreed in writing that each would leave a life estate in his or her share of the realty to the other, and that the survivor would leave a fee interest in the realty to their son, the plaintiff. After executing their wills, they told the plaintiff about their agreement. The plaintiff had recently contracted for the purchase of a residence but subsequently canceled the contract. Shortly afterwards, the defendant's wife died, leaving a life estate in her share of the realty to the defendant. One year later, the defendant remarried and changed his will to leave the realty to his second wife. When the defendant died, the plaintiff learned that the defendant's will left the realty to his second wife, so he sued the executrix of the defendant's estate for damages resulting from the defendant's breach of his agreement with his first wife.",
        q: "Is the plaintiff entitled to damages?",
        opts: [
            "Yes, because he canceled his contract for the purchase of a residence in reliance on the agreement between the defendant and his first wife.",
            "Yes, because after his mother's death, the plaintiff became a creditor beneficiary of the agreement between the defendant and his first wife.",
            "No, because the plaintiff is a donee beneficiary of the agreement between the defendant and his first wife.",
            "No, because by its terms, the agreement between the defendant and his first wife might be capable of being performed within one year."
        ],
        ans: 0,
        exp: "The plaintiff is an intended third-party donee beneficiary of the contract between his parents[cite: 32]. An intended third-party beneficiary acquires the right to enforce the contract once their rights have 'vested,' which occurs upon justifiably and detrimentally relying on the contract, assenting to it, or bringing suit[cite: 32]. Because the plaintiff relied on the agreement by canceling his contract to purchase another residence, his rights vested, making the contract enforceable by him against the defendant's estate[cite: 32]."
    },
    {
        id: 12,
        topic: "Consideration / Compromise of Disputed Claim",
        fp: "The plaintiff, an unmarried woman, became pregnant. Before the child was born, she told the defendant that he was the father. The defendant agreed to pay the expenses of having the child in return for the plaintiff's promise not to bring a paternity suit. After the child was born, the defendant refused to pay. A blood test then proved that the child could not be the defendant's. The plaintiff sued the defendant, claiming the defendant still needed to live up to the settlement since she had truly believed he was the father of the child.",
        q: "Is the plaintiff entitled to relief?",
        opts: [
            "Yes, because she detrimentally relied on the defendant's promise.",
            "Yes, because the plaintiff had a reasonable subjective belief that her claim was valid.",
            "No, because forbearance to bring suit cannot count as consideration for a settlement.",
            "No, because the plaintiff merely surrendered an invalid claim."
        ],
        ans: 1,
        exp: "A promise to waive an invalid claim constitutes sufficient consideration for a settlement if the plaintiff, at the time of settlement, had a bona fide subjective belief that the claim was valid, and this belief was not unreasonable[cite: 32]. The plaintiff here had a subjective belief that the defendant was the child's father, and it was likely reasonable, securing the defendant's promise to settle[cite: 32]. Thus, her forbearance was valid consideration[cite: 32]."
    },
    {
        id: 13,
        topic: "Third Parties / Assignment (Effectiveness)",
        fp: "When they decided to computerize their paperwork, a law firm contacted a specialist in the application of computer technology to the practice of law. After negotiations, the firm entered into a written contract with the specialist on June 1. According to the terms of the contract, the specialist was to immediately deliver and install in the office of the firm a computer and other specified hardware. The specialist was also required to design and install, by October 15, software consisting of a computer program that would suit the special needs of the firm's practice. In addition, the specialist agreed to service and maintain the hardware for a period of six years from the date of the contract. In return, the firm agreed to pay $5,000 within 30 days after delivery of the hardware, $5,000 within 30 days after delivery of the software, and $1,000 on the first day of each year that the contract remained in effect. The contract specified that the price of the hardware was $6,000, the price of the software was $4,000, and the charge for service and maintenance was $1,000 per year. On June 15, the specialist installed the agreed hardware in the office of the firm. On June 20, in satisfaction of an antecedent debt, the specialist assigned to another computer programmer her rights to receive payment for hardware already delivered under the contract with the firm. On August 1, before beginning to work on the design for the agreed software, the specialist sold her business to an established and reputable computer dealer. By the terms of the sale, the specialist assigned to the computer dealer all her rights under the contract with the firm. The firm failed to make any payment following the installation of the hardware, and on August 15, the specialist instituted a claim against them for $5,000.",
        q: "Which of the following would be the firm's most effective argument in defense against that claim?",
        opts: [
            "The specialist has not begun work on designing the software required by the contract.",
            "The specialist has made at least one effective assignment of her rights under the contract.",
            "The firm has no assurance that the specialist's obligations under the contract will be fulfilled.",
            "The contract between the specialist and the firm was divisible."
        ],
        ans: 1,
        exp: "An effective assignment transfers all the assignor's rights to the assignee[cite: 32]. Because the specialist successfully assigned her right to receive payment for the hardware to another programmer in satisfaction of an antecedent debt, she gave up her own legal right to collect that specific $5,000 payment[cite: 32]. Thus, if she has made an effective assignment of her rights under the contract, she no longer holds the rights and cannot personally enforce them in court against the firm[cite: 32]."
    },
    {
        id: 14,
        topic: "Acceptance / Accommodation Shipment (Counteroffer)",
        fp: "A drug manufacturer made vaccines and sold them to various distributors. Just before the drug manufacturer was about to raise the price of its vaccines, one of the distributors learned of the pending price increase. On May 19, the distributor placed a large order for 1,000 vials. The distributor's order stated that the distributor was to receive a price of $64 per vial (the old price), compared with the new price of $171. On June 3, the manufacturer shipped 50 vials at the old price, and simultaneously notified the distributor that the remainder of this order would be priced at the new price. The notice said the manufacturer was shipping the 50 vials as a favor, and acceptance of the order was expressly conditioned on the manufacturer's terms. The notice also said that if the distributor wanted to cancel the balance of the order, it could do so on or before June 13. The distributor sued for an order of specific performance compelling the manufacturer to sell it the remaining 950 vials at the old price.",
        q: "Is the distributor entitled to specific performance?",
        opts: [
            "Yes, because the manufacturer accepted the offer by shipping 50 vials.",
            "Yes, because the manufacturer breached the contract by sending only 50 vials.",
            "No, because the distributor's actions were unreasonable.",
            "No, because the manufacturer made a counteroffer."
        ],
        ans: 3,
        exp: "Under UCC § 2-206(1)(b), a shipment of nonconforming goods does not constitute an acceptance if the seller seasonably notifies the buyer that the shipment is offered only as an accommodation to the buyer[cite: 32]. When a seller makes an accommodation shipment, it is treated as a counteroffer rather than an acceptance[cite: 32]. Consequently, there was never a contract formed for the 1,000 vials at the old price, and the distributor is not entitled to specific performance[cite: 32]."
    },
    {
        id: 15,
        topic: "Consideration / Pre-existing Duty Rule",
        fp: "The defendant was a veterinarian who specialized in the treatment of livestock, including pigs, horses, cows, and sheep. The plaintiff was a farmer who raised various species of livestock. In addition, the plaintiff kept a private collection of exotic animals. Because the plaintiff's livestock frequently needed the attention of a veterinarian, he entered into a written contract with the defendant on January 1. Under the terms of the contract, the plaintiff was to pay the defendant $250 per month for one year, in return for which the defendant would render whatever treatment the plaintiff's livestock required during that period. On February 10, the local zoo telephoned the defendant, offering to give her a surplus tiger. Although the defendant had no experience with exotic animals, she accepted the tiger and put it in a cage in the back of her office. On February 22, having heard that the defendant had acquired a tiger, the plaintiff called her. When he asked the defendant if she was interested in selling the tiger for $450, she said, 'I was hoping to get $1,000 for the tiger, but I'll throw it in under our existing contract without charging you anything at all for it.' On March 10, the defendant was at the plaintiff's farm for the purpose of inoculating some of his cattle. When the plaintiff asked why she had not brought the tiger, the defendant said, 'I've changed my mind. If you want the tiger, you'll have to pay $450 for it.' The plaintiff asserted a claim against the defendant because of her refusal to deliver the tiger as promised.",
        q: "Should the court rule in favor of the plaintiff?",
        opts: [
            "Yes, because although the defendant was not a merchant as to the sale of a tiger, she was a merchant as to the sale of veterinary services.",
            "Yes, because his conversation with the defendant on February 22 resulted in a valid modification of the existing contract.",
            "No, because her promise to give the plaintiff the tiger was unsupported by consideration.",
            "No, because her promise to give the plaintiff the tiger was not in writing."
        ],
        ans: 2,
        exp: "Ordinarily, a promise is unenforceable unless supported by consideration[cite: 32]. Since consideration involves a bargained-for exchange, a preexisting obligation cannot serve as consideration for a new promise[cite: 32]. Except for the $250 per month that the plaintiff was already obligated to pay the defendant under their existing services contract, the plaintiff gave nothing in return for the defendant's new promise to deliver the tiger[cite: 32]. Thus, the defendant's promise was unsupported by consideration and is therefore unenforceable[cite: 32]."
    },
    {
        id: 16,
        topic: "Performance / Acceptance of Goods (Failure to Object)",
        fp: "On January 3, a lumber retailer ordered from a lumber wholesaler 1,000 2\" x 4\" fir boards, each 8 feet in length, for delivery by January 15. When the wholesaler delivered the fir boards on January 15, they were received by the retailer's manager, who informed the retailer that delivery was made but that the boards delivered by the wholesaler were only 7 feet long. The retailer intended to notify the wholesaler immediately, but he was busy and forgot to do so. On February 20, the retailer received the wholesaler's bill for the boards, but he did not pay the bill or communicate with the wholesaler in any way. On May 15, the wholesaler instituted a claim against the retailer for the price of the boards, and, in defense, the retailer contended that the boards delivered did not conform to the contract of sale.",
        q: "Is the wholesaler entitled to the price of the boards?",
        opts: [
            "Yes, because the retailer failed to inform him that the boards were only 7 feet in length.",
            "Yes, because a merchant buyer who accepts delivery of nonconforming goods is bound to pay for them at the contract price.",
            "No, because the boards did not conform to the contract of sale.",
            "No, because a merchant seller is not entitled to the price of nonconforming goods if a reasonable inspection prior to shipment would have disclosed the nonconformity."
        ],
        ans: 0,
        exp: "Under UCC § 2-606, acceptance occurs when the buyer fails to make an effective rejection after having a reasonable opportunity to inspect[cite: 32]. Under § 2-602, rejection must be made within a reasonable time after delivery and is ineffective unless the buyer seasonably notifies the seller[cite: 32]. Since the retailer was aware of the nonconformity the day the boards were delivered but failed to notify the wholesaler until sued four months later, he accepted the goods and failed to preserve his rights[cite: 32]. Under UCC § 2-607, a buyer who accepts nonconforming goods and fails to give timely notice of the defect is barred from any remedy, entitling the seller to the contract price[cite: 32]."
    },
    {
        id: 17,
        topic: "Formation / Option Contracts",
        fp: "A manufacturer of tractors had purchased hundreds of motors from an engine maker in the past at a price of $5,000 each. In 2011, the engine maker ceased production of the motor. By April 15, 2012, the engine maker found that she had only three motors left in her warehouse. Because she wanted to make room for the newer models, the engine maker signed and sent the following letter to the tractor manufacturer on April 15, 2012: 'I have only three motors left in stock and have stopped manufacturing them. If you are interested, I will sell you any or all of them for $1,000 each, a fraction of their usual price. Because we have done business in the past, I promise to hold this offer open until June 1, 2012.' Because the engine maker told the tractor manufacturer that she would hold the offer open until June 1, the tractor manufacturer went away on vacation without responding. On May 15, 2012, not having heard from the tractor manufacturer, the engine maker sold two of the motors to a car dealer for $1,000 each. Afraid to lose out on any more motors, the tractor manufacturer then bought the remaining motor when he returned.",
        q: "Was the engine maker's statement, 'I promise to hold this offer open until June 1,' supported by consideration?",
        opts: [
            "Yes, because it was a firm offer under the UCC.",
            "Yes, because the tractor manufacturer detrimentally relied upon it by not responding before May 15.",
            "No, because the engine maker was unsure whether the tractor manufacturer was still interested.",
            "No, because the tractor manufacturer gave nothing in return for the promise."
        ],
        ans: 3,
        exp: "Consideration usually consists of some legal detriment suffered by the promisee that is given in exchange for the promisor's promise[cite: 32]. Since the tractor manufacturer gave nothing in return for the engine maker's promise to keep the offer open, her promise was not supported by consideration[cite: 32]. (Note: While it may be a valid 'firm offer' under UCC § 2-205 making it irrevocable *without* consideration, the question specifically asks if the promise was *supported by consideration*, which it was not)[cite: 32]."
    },
    {
        id: 18,
        topic: "Consideration / Moral Obligation",
        fp: "The defendant and her assistant were working alone late one night when the defendant had a heart attack that rendered her unconscious and caused her to fall down an airshaft. The assistant believed the defendant to be dead, but he called for an ambulance and leaped into the airshaft, sustaining serious injury himself. Finding that the defendant was still alive, the assistant gave her first aid consisting of cardiopulmonary resuscitation. When the ambulance arrived, paramedics used stretchers and pulleys to get the defendant and the assistant out of the airshaft, and then they brought them to the hospital. Several days later, while she was still in the hospital, a doctor told the defendant that she would probably have died if not for the assistant's quick and effective action. The defendant wrote the assistant a note that said, 'In return for your saving my life, I'm going to pay all your hospital bills. In addition, I'm going to add a bonus of $3,000 per month to your salary for the rest of your life. If you choose to retire right now, I'll pay you $3,000 per month for the rest of your life as a retirement pension.' The defendant paid the assistant's hospital bills, but because her business took an unexpected downturn, she never paid him $3,000, and subsequently she informed him that she would not be able to pay him a bonus or a retirement pension.",
        q: "If the assistant asserts a claim against the defendant for her failure to pay him the bonus of $3,000 per month, which of the following would be the assistant's most effective argument in support of his claim?",
        opts: [
            "The defendant's promise to pay the bonus was in writing.",
            "The assistant detrimentally relied on the defendant's promise.",
            "The defendant's promise was supported by an underlying moral obligation.",
            "The assistant's rescue of the defendant resulted in a contract implied-in-fact."
        ],
        ans: 2,
        exp: "Ordinarily, a promise is not enforceable unless there was consideration (i.e., something given in exchange for and to induce the promise)[cite: 32]. Since the assistant's service had already been rendered without expectation of payment, it was not given in exchange for the promise and is past consideration[cite: 32]. However, under a modern minority trend (recognized in the Restatement), a promise made in recognition of a benefit previously received by the promisor from the promisee is binding to the extent necessary to prevent injustice—often called the 'material benefit' or 'moral obligation' rule[cite: 32]. This is the only listed argument that could possibly result in a victory for the assistant[cite: 32]."
    },
    {
        id: 19,
        topic: "Defenses / Mutual Mistake",
        fp: "An art dealer employed several agents who traveled throughout the world purchasing art for her to sell in her gallery. One of her agents sent her a painting that she said was by a famous artist. The dealer had just received the painting and was about to place it on display when the buyer, a collector of art, came into the gallery. Seeing the new painting, he said, 'An interesting painting by the famous artist.' The dealer replied, 'Yes, it is. I'm asking $50,000 for it.' The buyer agreed to the price and immediately wrote a check for the sum of $50,000 payable to the order of the dealer, writing the words 'Payment in full for the painting by the famous artist' on the back of the check. The dealer accepted the check and delivered the painting to the buyer. If the painting had actually been by the famous artist, it would have been worth $50,000. The same day, however, the buyer discovered that the painting was a forgery, worth only a few hundred dollars, and he stopped payment on his check before the dealer could cash it.",
        q: "If the dealer asserts a claim against the buyer for breach of contract, which of the following would be the buyer's most effective defense?",
        opts: [
            "The contract of sale was not evidenced by a writing signed by both parties.",
            "At the time of sale, the buyer and the dealer both believed that the painting was by the famous artist.",
            "It is unconscionable to make the buyer pay $50,000 for a painting worth only a few hundred dollars.",
            "The painting was not adequate consideration for the buyer's promise to pay."
        ],
        ans: 1,
        exp: "If, at the time a contract is formed, the parties to it are operating under a mutual mistake as to a basic assumption that has a material effect on the agreed exchange, the resulting lack of mutual agreement excuses non-performance by either party[cite: 32]. Since both the buyer and the dealer mistakenly believed that the painting was genuinely painted by the famous artist (a basic assumption of identity, not just value), this mutual mistake voids the contract and excuses the buyer's non-performance[cite: 32]."
    },
    {
        id: 20,
        topic: "Terms / Parol Evidence Rule Exception (Condition Precedent)",
        fp: "A businessman who was running for government office entered into a written contract with a golf pro to redesign the golf course at a golf club the businessman owned. According to the terms of the contract, the redesign had to be finished by November 30. While they were negotiating the contract, the businessman told the golf pro that redesigning the golf course was dependent upon him being elected to the government office he was running for because he would like to use the golf course to entertain other government officials as well as the general public. The golf pro thought the businessman had a very good chance of winning, so he orally agreed that the redesign was dependent upon the businessman winning his election. After signing the contract, the businessman started his national campaign and was unable to respond to any calls from the golf pro. Because all of the relevant polls predicted that the businessman would win the election, and because the golf pro was worried about meeting the contract's deadline, he went ahead and completed the redesign on November 6. The businessman lost the election. On November 7, the golf pro submitted his bill to the businessman. The businessman contacted his attorney and told her that he didn't want to pay the golf pro for the redesign.",
        q: "What would be the attorney's best argument against paying the contract?",
        opts: [
            "The purpose of the contract was frustrated by the businessman failing to win the election.",
            "Winning the election was a condition precedent to the contract.",
            "The rules of construction allow evidence of the oral agreement to clear up the ambiguity in the contract.",
            "At the time of the contract, both parties believed that the businessman would win the election."
        ],
        ans: 1,
        exp: "The parol evidence rule generally bars extrinsic evidence of prior or contemporaneous agreements that contradict a fully integrated writing[cite: 32]. However, there is an exception that allows parol evidence to show that a written contract was subject to an oral condition precedent to its effectiveness[cite: 32]. If winning the election was an oral condition precedent to the formation or effectiveness of the entire contract, the contract would not have come into effect because the businessman did not win the election, relieving him of any obligation to pay[cite: 32]."
    },
    {
        id: 21,
        topic: "Remedies / Expectation Damages",
        fp: "In January, a farmer planted a field of beans that would be ready for harvest in June. Because she expected the harvest to yield more than 5,000 bushels of beans, she entered into a written contract with a buyer on March 1, wherein the farmer agreed to sell and the buyer agreed to buy 2,000 bushels of beans at $2 a bushel to be delivered during the month of June. On March 2. the farmer entered into an identical written contract with a restaurant. In the first week of April, heavy rains inundated the farmer's field, destroying part of her crop. As a result, she doubted that she would be able to fulfill her contract with both the buyer and the restaurant. On April 15, she called the restaurant and said that because of the storms, she would not be able to deliver more than 1,000 bushels. The restaurant said 'I'll take whatever you deliver, but I intend to hold you to the terms of our contract.' On June 15, the farmer harvested her field. The American Bean Exchange price on June 15 was $2 per bushel, and beans were readily available at that price. The farmer's harvest yielded 2,000 bushels of beans, and on June 15 she delivered 1,000 bushels to the restaurant.",
        q: "If the restaurant institutes a claim against her for damages resulting from breach of contract, which of the following would be the farmer's most effective argument in defense?",
        opts: [
            "Her inability to deliver 2,000 bushels was the result of an Act of God.",
            "She notified the restaurant on April 15 that she would be unable to deliver more than 1,000 bushels.",
            "The restaurant sustained no substantial damage, since the contract price equaled the market price on the day of delivery.",
            "Her obligation to the buyer was greater than her obligation to the restaurant, since her contract with the buyer was formed before her contract with the restaurant."
        ],
        ans: 2,
        exp: "Generally, a buyer's expectation damages for a seller's non-delivery consist of the difference between the contract price and the market price on the day of delivery, plus incidental and consequential damages[cite: 32]. Since the market price on the day of delivery ($2) and the contract price ($2) are identical, the restaurant has sustained no substantial contract-market differential damage as a result of the farmer's non-delivery of the remaining 1,000 bushels[cite: 32]. This is her most effective defense against significant monetary liability[cite: 32]."
    },
    {
        id: 22,
        topic: "Formation / Unilateral Contract",
        fp: "The homeowner went into his garage one morning and found that someone had broken in during the night and stolen a hand-carved milking stool that had been stored there. The stool did not have much intrinsic worth, but it was a family heirloom and had great sentimental value for the homeowner. The angry homeowner ran into a bar that was located near his home. Entering the bar, he said in a loud voice, 'I'll pay $1,000 to anyone who finds the thief that stole a hand-carved stool out of my garage last night.' The owner of the bar heard the homeowner's statement and said, 'I'll catch that thief for you.'",
        q: "Which of the following statements most correctly describes the position of the homeowner and the owner of the bar following the incident in the bar?",
        opts: [
            "The homeowner has made an offer for a unilateral contract that became irrevocable when the owner of the bar said, 'I'll catch that thief for you.'",
            "The homeowner has made an offer for a unilateral contract that the owner of the bar can accept only by catching the thief before the homeowner makes an effective revocation of the offer.",
            "The homeowner and the owner of the bar are parties to a bilateral contract.",
            "The homeowner has not made any offer that can be accepted by the owner of the bar."
        ],
        ans: 1,
        exp: "A unilateral contract is one in which the offeror promises to pay upon the completion of a requested act, not upon a return promise[cite: 32]. Because the homeowner's offer was to pay $1,000 to the person who actually 'finds the thief,' he has made an offer for a unilateral contract[cite: 32]. The bar owner could accept this offer only by performing the required act (catching the thief)[cite: 32]. The bar owner's verbal promise to do so did not constitute acceptance, and no bilateral contract was formed[cite: 32]. The offer remains open to be accepted only by performance, provided it is not revoked first[cite: 32]."
    },
    {
        id: 23,
        topic: "Remedies / Liquidated Damages & Specific Performance",
        fp: "The landowner was the owner of two adjoining parcels of unimproved realty. Although she was interested in improving and selling the realty, she did not have the necessary capital. After negotiation, the landowner entered into a written contract with a building contractor. According to the terms of the contract, the builder was to provide labor and materials for the construction of a building on one of the parcels according to certain specifications. All construction was to be completed by a certain date, at which time the landowner was to convey the other parcel of realty to the builder as his sole compensation for the labor and materials supplied. The contract contained a clause providing for liquidated damages in the event of a breach by either party. After the builder completed construction as agreed, the landowner refused to convey the other parcel of realty to him. As a result, the builder appropriately asserted alternative claims for relief against the landowner, demanding liquidated damages as provided in the contract, actual damages, or an order directing the landowner to perform as agreed.",
        q: "Which of the following correctly describes the builder's rights against the landowner?",
        opts: [
            "If the liquidated damages clause established a penalty, the court can properly enter judgment for any actual damages that resulted from the landowner's breach.",
            "If the liquidated damages clause did not establish a penalty, the court can properly direct the landowner to perform as agreed.",
            "If the liquidated damages clause established a penalty, the court can enter a judgment for any actual damages; if it did not, the court can direct the landowner to perform as agreed.",
            "The builder has no enforceable rights."
        ],
        ans: 2,
        exp: "A liquidated damages clause is a provision fixing the amount of damages should a breach occur[cite: 32]. If it is a reasonable forecast of difficult-to-ascertain damages, it is enforceable; if it is unreasonable, it is an unenforceable 'penalty,' and the party may collect actual damages[cite: 32]. However, an enforceable liquidated damages clause provides only the measure for monetary damages; it does not necessarily prevent the wronged party from seeking specific performance[cite: 32]. Because real property is involved, specific performance is generally available[cite: 32]. Thus, if it's a penalty, the builder gets actual damages; if it's not a penalty, the builder can still seek the equitable remedy of specific performance[cite: 32]."
    },
    {
        id: 24,
        topic: "Remedies / Lost Volume Seller",
        fp: "An automobile dealer sold an expensive line of imported automobiles. The company that manufactured the vehicles in Germany sold them to the dealer at the wholesale price for resale by the dealer at the retail price. On January 12, a buyer ordered a new automobile from the dealer, executing a written contract of purchase and sale at the specified retail price. The car was to be equipped with certain optional equipment and was to be delivered on or before March 15. Immediately after contracting with the buyer, the dealer ordered the car from the company in Germany. On February 28, another buyer ordered from the dealer a car identical to that which had been ordered by the first buyer at an identical price. The following day, before ordering a car for the second buyer from the manufacturer, the dealer received the car ordered by the first buyer. When the first buyer was notified, however, he said that he had changed his mind and would not go through with the transaction. The dealer therefore delivered the car to the second buyer and did not order a car for the second buyer from the manufacturer.",
        q: "If the dealer asserts a claim against the first buyer for damages resulting from breach of contract, what is the dealer entitled to recover in damages?",
        opts: [
            "Nothing, because the car was sold to the second buyer at the same price that the first buyer agreed to pay.",
            "The difference between the wholesale price of the car and its retail price.",
            "The difference, if any, between the price that the first buyer agreed to pay for the car and its reasonable market value.",
            "The difference, if any, between the price that the dealer paid for the car and its reasonable market value."
        ],
        ans: 1,
        exp: "UCC § 2-708(2) provides that where the standard measure of damages (contract price minus market price) is inadequate to put the seller in as good a position as performance would have done, the seller may recover their expected profit[cite: 32]. The dealer here is a 'lost volume seller'—one who has enough inventory (or access to it) to fulfill multiple contracts[cite: 32]. Had the first buyer not breached, the dealer would have sold two cars to two buyers and made two profits[cite: 32]. Because of the breach, the dealer only made one profit[cite: 32]. Therefore, the dealer is entitled to the lost profit from the first sale, which is the difference between the wholesale price and the retail price[cite: 32]."
    },
    {
        id: 25,
        topic: "Performance / Condition Precedent",
        fp: "For several years following his graduation from college, the plaintiff made no attempt to find employment. During this period, he was usually intoxicated, and spent most of his time drinking alcohol at the bar owner's tavern. On September 1, 2012, the plaintiff's mother stated orally that if the plaintiff promised to go to law school and to stop drinking for the rest of his life, she would give him $10,000 on July 1, 2013. The plaintiff promised that he would never drink alcohol again and that he would enroll in law school as soon as possible. The plaintiff began attending a law school two weeks later. In December 2012, however, he withdrew from the school, deciding that he did not like it. On July 1, 2013, the plaintiff's mother refused to pay, and the plaintiff asserted a claim against her for $10,000.",
        q: "Which of the following would be the plaintiff's mother's most effective argument in response to that claim?",
        opts: [
            "The plaintiff's completion of law school was an implied condition precedent to his mother's promise to pay $10,000.",
            "The plaintiff's remaining in law school until July 1, 2013, was an implied condition precedent to his mother's duty to pay.",
            "The plaintiff's mother's promise was not supported by consideration.",
            "The plaintiff's mother's promise was not in writing."
        ],
        ans: 1,
        exp: "A contract may make the happening of a particular event a condition precedent to the performance of a contractual duty[cite: 32]. If so, the obligation to perform does not become absolute until the condition is fulfilled[cite: 32]. A condition can be implied by the language and circumstances[cite: 32]. Since the mother's promise to pay was set for July 1, 2013, it is highly reasonable to infer that the plaintiff remaining in law school until that payout date was an implied condition precedent to her obligation to pay[cite: 32]. By withdrawing in December, the plaintiff failed the condition, discharging the mother's duty[cite: 32]. (Consideration was present, as forbearing from drinking is a legal detriment, and the 1-year SOF does not apply since he could have died within a year)[cite: 32]."
    }
];