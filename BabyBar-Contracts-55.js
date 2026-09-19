// BabyBar-Contracts-55.js
// Total Questions: 25
// Subject: Contracts (Common Law & UCC Article 2) ONLY
// Standard: Master Tier 5 / First-Year Law Students' Examination (Baby Bar) Benchmark
const examData = [
    {
        id: 1,
        topic: "Remedies / Liquidated Damages & Estoppel",
        fp: "A homeowner's fire insurance policy paid 'living expenses necessitated by loss' up to 90 days, fixed at $50 per day. The homeowner hired a contractor to rebuild. The contract contained a liquidated damages clause: if the contractor is late, he pays the homeowner $50 per day. The contractor was 10 days late. The insurance company paid the 60 days of actual rebuilding time but refused to pay the extra 10 days, arguing the homeowner was estopped by the liquidated damages clause from claiming her living expenses exceeded $50 a day.",
        q: "Is the homeowner entitled to the additional 10 days of living expenses from the insurance company?",
        opts: [
            "Yes, because she can establish that her living expenses necessitated by the loss exceeded the contractor's penalty[cite: 5].",
            "No, because the homeowner is estopped by the liquidated damages clause in her contract with the contractor[cite: 5].",
            "Yes, because the insurance company agreed to pay $50 per day until the house was reconstructed, up to 90 days[cite: 5].",
            "No, because the 10-day delay was caused by the contractor, not the fire[cite: 5]."
        ],
        ans: 2,
        exp: "(C) is the correct response. The insurance contract expressly obligated the insurance company to pay $50 per day for living expenses until the house was rebuilt, up to a maximum of 90 days[cite: 5]. The rebuilding took 70 days total. The insurance company is bound by its own policy terms to pay for those 70 days[cite: 5]. The collateral source rule and privity of contract mean that the homeowner's separate contract with the builder (and its liquidated damages clause) does not diminish the insurance company's independent contractual obligation[cite: 5]. Therefore, the homeowner is not estopped from collecting the remaining 10 days from the insurer[cite: 5]. (A) is incorrect because the recovery is based on the flat $50/day policy rate, not proof of actual expenses exceeding the penalty[cite: 5]. (B) is incorrect because a contract with a third party does not estop claims against the insurer[cite: 5]. (D) is incorrect because construction delays are a foreseeable part of rebuilding after a fire, covered under the 90-day window[cite: 5]."
    },
    {
        id: 2,
        topic: "Performance / Divisible Contracts (Substantial Performance)",
        fp: "An asbestos removal company contracted to remove asbestos from 20 university buildings for $10,000 per building. The contract stated the company would be paid $200,000 upon completion of all 20 buildings. After completing 5 buildings, the company demanded $50,000 due to cash flow problems. The university refused, insisting on full completion first. The company stopped work and sued for the work completed.",
        q: "Is the company entitled to recovery?",
        opts: [
            "No, because the company did not complete removal from all 20 buildings[cite: 5].",
            "Yes, because the contract is divisible[cite: 5].",
            "Yes, because the company cannot complete the contract without payment[cite: 5].",
            "No, because cash flow issues were foreseeable at the time of contracting[cite: 5]."
        ],
        ans: 1,
        exp: "(B) is the correct response. A contract is divisible if the performances to be exchanged can be apportioned into corresponding pairs of part performances that are properly regarded as agreed equivalents[cite: 5]. Here, the contract apportioned the work and payment into matching units of $10,000 per building. In a divisible contract, full performance of an individual divisible segment entitles the performing party to the agreed contract compensation for that segment, even if they subsequently breach the remaining executory segments[cite: 5]. Because the company completed 5 buildings, it is entitled to recover the $50,000 contract price for those buildings, subject to the university's right to offset any damages caused by the failure to finish the remaining 15[cite: 5]. (A) is incorrect because divisibility protects accrued compensation from forfeiture despite failure to complete the whole[cite: 5]. (C) is incorrect because a party's personal financial inability does not legally excuse performance[cite: 5]. (D) is incorrect because foreseeability of cash flow issues is irrelevant to recovery under a divisible contract[cite: 5]."
    },
    {
        id: 3,
        topic: "Remedies / Payment Prior to Inspection",
        fp: "A bar owner contracted to buy 200 pounds of large pickled eggs. The contract provided: 'Payment shall be due immediately on delivery and prior to inspection.' A box arrived, and the owner paid the price. An hour later, the owner opened the box and discovered small eggs. The farmer refused to exchange them. The bar owner returned the eggs and sued for breach of contract.",
        q: "If the bar owner succeeds, what is the most likely action the court will take?",
        opts: [
            "Issue an order directing the farmer to deliver 200 pounds of large eggs[cite: 5].",
            "Award damages consisting of the difference between the value of large eggs and small eggs[cite: 5].",
            "Require the farmer to return the money that the bar owner paid[cite: 5].",
            "Award damages consisting of the purchase price plus the difference between the contract price and the market price for large eggs[cite: 5]."
        ],
        ans: 2,
        exp: "(C) is the correct response. Under UCC § 2-512, payment required prior to inspection does not constitute acceptance and does not impair the buyer's right to inspect or rightfully reject nonconforming goods[cite: 5]. Because the eggs were nonconforming, the buyer rightfully rejected them and returned them[cite: 5]. Upon rightful rejection, the buyer's primary remedy under UCC § 2-711 is cancellation of the contract and recovery of any portion of the price that has been paid[cite: 5]. Therefore, the court will require the farmer to refund the purchase price[cite: 5]. (A) is incorrect because specific performance is granted only for unique goods, not standard pickled eggs[cite: 5]. (B) is incorrect because that formula applies to breach of warranty for *accepted* goods (UCC § 2-714), but the buyer here rejected them[cite: 5]. (D) is technically a possible total remedy (refund + cover/market damages), but (C) is the immediate direct remedy for rejection of paid goods and is the intended best answer in the standard problem format[cite: 5]."
    },
    {
        id: 4,
        topic: "Formation / Mailbox Rule & Lost Acceptance",
        fp: "A seller mailed a list of law books to a buyer on July 5, asking 'Interested in buying?' The buyer wrote back offering to buy them for $100, delivered September 1. The seller received the letter on July 9 and immediately mailed a signed response: 'I accept your offer.' Due to a post office fire, the letter was destroyed and never delivered. On September 1, the seller delivered the books, but the buyer refused them.",
        q: "What is the legal effect of the seller's July 9 letter?",
        opts: [
            "It formed a bilateral contract when mailed because the buyer chose the mail as the medium of communication[cite: 5].",
            "It would have constituted an acceptance, but because it was not received, no contract was formed[cite: 5].",
            "It bound both parties to a unilateral contract when it was mailed[cite: 5].",
            "It did not prevent the buyer from withdrawing his offer because it was destroyed[cite: 5]."
        ],
        ans: 0,
        exp: "(A) is the correct response. Under the mailbox rule (Restatement § 63(a)), an acceptance made in a manner and by a medium invited by an offer is operative and forms a binding contract as soon as it is properly dispatched (placed in the mail), regardless of whether it ever reaches the offeror[cite: 5]. Because the buyer sent his offer by mail, he implicitly authorized acceptance by mail[cite: 5]. Therefore, the seller's mailed acceptance formed a binding bilateral contract on July 9, despite the subsequent post office fire[cite: 5]. (B) is incorrect because actual receipt is not required under the mailbox rule[cite: 5]. (C) is incorrect because the exchange of promises (to deliver and to pay) created a bilateral contract, not a unilateral one[cite: 5]. (D) is incorrect because the formation of the contract upon dispatch instantly terminates the offeror's power to revoke the offer[cite: 5]."
    },
    {
        id: 5,
        topic: "Remedies / Liquidated Damages Reasonableness",
        fp: "A buyer insisted a home sale contract contain a liquidated damages clause: if the home was not ready by April 20, the seller would pay $75 for each day of delay. On April 20, the home was not ready, forcing the buyer to stay in a motel. On May 1, the seller repudiated the contract entirely. The buyer sued for specific performance and damages pursuant to the liquidated damages clause.",
        q: "With respect to the demand for liquidated damages, what will the court's finding turn on?",
        opts: [
            "Whether the buyer could have avoided staying at a motel by mitigating damages[cite: 5].",
            "Whether the motel charged a commercially reasonable rate[cite: 5].",
            "Whether the buyer's purpose was to penalize the seller to ensure timely vacancy[cite: 5].",
            "Whether, at the time the contract was formed, $75 per day was a reasonable forecast of the buyer's expected living expenses[cite: 5]."
        ],
        ans: 3,
        exp: "(D) is the correct response. A liquidated damages clause is enforceable only if: (1) the anticipated damages are difficult to ascertain at the time of contracting, and (2) the stipulated amount is a reasonable forecast of just compensation for the harm caused by the breach (Restatement § 356)[cite: 5]. The enforceability of the clause is judged *prospectively* from the time of contract formation[cite: 5]. If the $75 per day was a reasonable estimate of anticipated hotel and storage costs at the time the contract was signed, the clause is valid[cite: 5]. If it was an extravagant sum designed solely to punish the seller, it is an unenforceable penalty[cite: 5]. (A) and (B) are incorrect because the validity of a liquidated damages clause does not depend on ex-post mitigation or actual costs incurred, but on the ex-ante reasonableness of the estimate[cite: 5]. (C) is incorrect because the subjective purpose is less relevant than the objective reasonableness of the forecast[cite: 5]."
    },
    {
        id: 6,
        topic: "Consideration / Compromise of Invalid Claim",
        fp: "A doctor rescued a man in the desert, providing week-long care. The man's mother later promised in writing to pay the doctor $350 in gratitude. The mother and doctor both died. The doctor's administrator informed the mother's husband that he intended to file a claim against the estate for $350. To avoid the claim, the husband signed a document agreeing to pay $350 in consideration of the services rendered and the administrator's promise not to sue the estate. The husband then refused to pay.",
        q: "Were the services rendered by the doctor sufficient consideration for the husband's promise?",
        opts: [
            "Yes, because they imposed a preexisting moral obligation on the husband[cite: 5].",
            "Yes, because the husband received a material benefit from them[cite: 5].",
            "No, because they were not requested by the husband[cite: 5].",
            "No, because the reasonable value of the services was too speculative[cite: 5]."
        ],
        ans: 2,
        exp: "(C) is the correct response. Consideration requires a bargained-for exchange[cite: 5]. A promise made in recognition of a past benefit generally lacks consideration because the action was not bargained for or performed in exchange for the promise ('past consideration is no consideration')[cite: 5]. The doctor acted independently to save the man; the husband did not ask or bargain for the rescue prior to the act[cite: 5]. Therefore, the services themselves are NOT consideration for the husband's subsequent promise[cite: 5]. (Note: the administrator's promise *not to sue the estate* is the actual consideration here, but the question specifically asks if the *services* are consideration)[cite: 5]. (A) and (B) are incorrect because under the material benefit rule (Restatement § 86), a subsequent promise to pay for a past life-saving act might be enforceable if the promisor himself received the direct material benefit, but courts rarely extend this to third parties (the husband)[cite: 5]. (D) is incorrect because the inability to quantify value is not the doctrinal reason the claim fails; it fails strictly for lack of a bargained-for exchange[cite: 5]."
    },
    {
        id: 7,
        topic: "Formation / Unilateral Contract & Promissory Estoppel",
        fp: "On September 10, a publisher posted a notice at a law school offering a $10,000 award to the student with the highest GPA. A top student saw it and resolved to work harder. On September 20, she mailed a letter: 'I accept your offer.' The following May, the publisher posted a new notice canceling the award. The student sued.",
        q: "In a jurisdiction applying the Restatement (Second) of Contracts, what is the most important factor in deciding if the revocation was effective?",
        opts: [
            "Whether the student saw the second notice before taking her exams[cite: 5].",
            "Whether the student made extra efforts in her studies in reliance on the September 10 notice[cite: 5].",
            "Whether the student's letter of September 20 was effective when mailed or received[cite: 5].",
            "Whether the second notice was as large and conspicuously posted as the first[cite: 5]."
        ],
        ans: 1,
        exp: "(B) is the correct response. An offer of a prize or reward to the public is an offer for a unilateral contract, accepted only by full performance (achieving the highest GPA)[cite: 5]. Under Restatement (Second) of Contracts § 45, an offer for a unilateral contract becomes irrevocable once the offeree tenders or begins the requested performance, creating an option contract[cite: 5]. If the student actually expended extra effort and altered her study habits in reliance on the notice, she commenced performance, thereby suspending the publisher's power to revoke the offer[cite: 5]. (A) is incorrect because if performance had begun, the revocation is ineffective regardless of whether she saw it[cite: 5]. (C) is incorrect because a unilateral offer cannot be accepted by a return promise (the letter), rendering the mailbox rule irrelevant[cite: 5]. (D) is incorrect because while equal publicity is the standard method for revoking a general public offer, it does not override the irrevocability triggered by commenced performance under § 45[cite: 5]."
    },
    {
        id: 8,
        topic: "Third-Party Beneficiaries / Incidental Beneficiaries",
        fp: "A landowner and a contractor contracted with a builder to construct a house as a wedding gift for their children. The builder agreed to collect half his payment from each father. The contractor then sub-contracted the painting work to his own son for $3,000. Later, the contractor became ill and sold his business to his son, assigning the painting contract. The son refused to paint the house. The landowner then decided not to convey the property to the children. The son sued the landowner to enforce the gift.",
        q: "Which of the following arguments furnishes the landowner with his strongest defense?",
        opts: [
            "The son did not rely or assent to the contract of January 1 between the fathers[cite: 5].",
            "The son was only an incidental beneficiary of the January 1 contract since the landowner's primary intent was to benefit the daughter[cite: 5].",
            "The son's painting of the house was a condition precedent to the landowner's obligation to convey[cite: 5].",
            "The contract between the contractor and the builder breached a fiduciary obligation[cite: 5]."
        ],
        ans: 1,
        exp: "(B) is the correct response. A third party can enforce a contract only if they are an intended beneficiary. An intended beneficiary exists if the promisee intended to give the beneficiary the benefit of the promised performance[cite: 5]. Here, the landowner's primary intent in making the contract was to benefit his *daughter* (by giving her a house), not to benefit the contractor's son (who was marrying the daughter)[cite: 5]. Because the contractor's son was not the primary intended beneficiary of the landowner's promise, he is classified as an incidental beneficiary and possesses no standing to sue the landowner for breach[cite: 5]. (A) is incorrect because reliance and assent are relevant only for vesting the rights of *intended* beneficiaries[cite: 5]. (C) is incorrect because the painting agreement was a separate subsequent subcontract, not a condition precedent to the landowner's original promise[cite: 5]. (D) is incorrect because assignments of commercial duties do not generally breach fiduciary obligations[cite: 5]."
    },
    {
        id: 9,
        topic: "Defenses / Intoxication & Voidability",
        fp: "A seller went out drinking with a buyer on the buyer's birthday. The seller became intoxicated. During the conversation, the seller wrote on a napkin: 'I agree to sell my rare sports car to the buyer for $500,' and signed it. The car was worth vastly more. The next day, the buyer tendered $500, but the seller refused, claiming she was drunk.",
        q: "Which of the following additional facts would be most helpful to the seller's defense?",
        opts: [
            "The seller changed her mind before the buyer tendered the cash[cite: 5].",
            "The seller would not have offered to sell the car for $500 if she had not been drunk[cite: 5].",
            "The seller was so drunk when she wrote on the napkin that she did not know the legal consequences of her act[cite: 5].",
            "The car was worth substantially more than $500[cite: 5]."
        ],
        ans: 2,
        exp: "(C) is the correct response. A contract entered into by an intoxicated person is voidable only if the intoxication was so severe that the person was unable to understand the nature and legal consequences of the transaction, AND the other party had reason to know of the intoxication (Restatement § 16)[cite: 5]. Proving that the seller was completely devoid of contractual capacity (did not know the legal consequences of her act) is the essential factual prerequisite to establishing the defense of intoxication[cite: 5]. (A) is incorrect because a signed contract cannot be unilaterally revoked merely by changing one's mind[cite: 5]. (B) is incorrect because 'but-for' causation (she wouldn't have done it sober) is insufficient; the intoxication must destroy cognitive capacity[cite: 5]. (D) is incorrect because mere inadequacy of consideration does not void a contract, though it may be evidence of incapacity[cite: 5]."
    },
    {
        id: 10,
        topic: "Terms / UCC Applicability to Animals",
        fp: "A plaintiff admired a defendant's highly trained dog. The defendant wrote a contract: 'I agree to sell my dog to the plaintiff. Price to be decided at delivery.' The plaintiff intended to resell the dog. When the plaintiff arrived, the defendant refused to hand over the dog. The plaintiff sued.",
        q: "Does the UCC apply to the transaction between the plaintiff and the defendant?",
        opts: [
            "No, because the price and delivery date terms were missing from the agreement[cite: 5].",
            "No, because unless it is a farm animal, a living thing does not fit the definition of 'goods' under the UCC[cite: 5].",
            "Yes, because this was a transaction in goods[cite: 5].",
            "No, because the plaintiff was seeking to purchase the dog for resale[cite: 5]."
        ],
        ans: 2,
        exp: "(C) is the correct response. Under UCC § 2-105(1), 'goods' means all things (including specially manufactured goods) which are movable at the time of identification to the contract for sale[cite: 5]. This definition universally includes living animals, pets, and livestock[cite: 5]. Because a dog is a movable physical item, the sale of the dog constitutes a transaction in goods governed by UCC Article 2[cite: 5]. (A) is incorrect because under the UCC, a contract can be formed even if terms like price and delivery date are omitted, provided there is a reasonably certain basis for giving a remedy (UCC § 2-204)[cite: 5]. (B) is incorrect because the UCC's definition of goods is not restricted to farm animals; all movable animals qualify[cite: 5]. (D) is incorrect because purchasing for resale makes the buyer a merchant, reinforcing the application of the UCC[cite: 5]."
    },
    {
        id: 11,
        topic: "Remedies / Specific Performance (Unique Goods)",
        fp: "An attorney decided to invest $4,000 in art for her office. On November 1, she contracted to purchase a painting from a dealer, delivery on December 28. On November 15, the dealer accidentally sold it to someone else. The attorney then spent the $4,000 on a different painting. The dealer recovered the original painting and tendered it on December 28. The attorney refused it, but the next day sued for specific performance.",
        q: "Is the attorney entitled to specific performance?",
        opts: [
            "Yes, because the painting is unique[cite: 5].",
            "No, because the attorney has already succeeded in investing $4,000 in art for her office[cite: 5].",
            "Yes, because the defendant's sale to the other person was an anticipatory repudiation[cite: 5].",
            "No, because the attorney refused to accept delivery of the painting on December 28[cite: 5]."
        ],
        ans: 0,
        exp: "(A) is the correct response. Specific performance is an equitable remedy available under UCC § 2-716 where the goods are unique or in other proper circumstances[cite: 5]. Original works of art, such as paintings, are inherently unique, making monetary damages inadequate to put the buyer in the position of having that exact item[cite: 5]. Therefore, the attorney is entitled to specific performance[cite: 5]. (B) is incorrect because buying substitute art does not extinguish her right to the specific unique piece she contracted for[cite: 5]. (C) is incorrect because while the sale was a repudiation, the basis for specific performance is the uniqueness of the good, not the nature of the breach[cite: 5]. (D) is incorrect because her refusal to accept delivery on the 28th after purchasing a substitute does not necessarily waive her right to subsequently demand the unique item through a court order (though practically, rejecting tender and then demanding it back is contradictory, (A) is the doctrinal answer regarding the availability of the remedy)[cite: 5]."
    },
    {
        id: 12,
        topic: "Performance / Conditions Precedent vs Subsequent",
        fp: "A seller agreed to sell a building containing two apartments for $60,000. The contract required delivery of title on August 1. The seller promised the upstairs apartment would be vacant on August 1, and the downstairs vacant within three months thereafter. The buyer promised to pay $58,000 on August 1, and the $2,000 balance three months later. The contract stated: 'The buyer's obligation to pay $2,000 three months after delivery of title shall be voided if the downstairs apartment has not been vacated by that time.'",
        q: "Which statement concerning the order of performances is LEAST accurate?",
        opts: [
            "Payment of $2,000 is a condition subsequent to the seller's obligation to have the downstairs apartment vacated[cite: 5].",
            "The seller's delivery of title and the buyer's payment of $58,000 are concurrent obligations[cite: 5].",
            "Vacancy of the upstairs apartment is a condition precedent to the buyer's obligation to pay $58,000[cite: 5].",
            "Payment of $58,000 is a condition precedent to the seller's obligation to deliver title[cite: 5]."
        ],
        ans: 0,
        exp: "(A) is the correct response (it is the LEAST accurate statement). A condition subsequent is an event that extinguishes a duty of performance that has already become absolute[cite: 5]. The contract language requires the seller to vacate the apartment *before* the buyer is obligated to pay the final $2,000. Because the vacancy must occur first to trigger the payment duty, vacating is a condition precedent to payment, not a condition subsequent[cite: 5]. Therefore, the statement in (A) is legally inaccurate[cite: 5]. (B) is an accurate statement because closing performances (title for cash) are presumed concurrent conditions[cite: 5]. (C) is an accurate statement because the upstairs must be vacant *at* closing, making it a condition precedent to the buyer handing over the money[cite: 5]. (D) is accurate as it describes the concurrent nature of the closing exchange[cite: 5]."
    },
    {
        id: 13,
        topic: "Formation / Solicitations vs Offers",
        fp: "A buyer wrote to an antiques dealer: 'If you find a good piece in Europe, purchase it for me. I don't care about cost.' On April 17, the dealer wrote: 'I found an excellent table for $15,000. Are you still interested? Let me know if the price is acceptable.' The buyer replied '15,000 is OK. Buy it.' The dealer sold it to someone else.",
        q: "If a court determines the dealer's April 17 letter was NOT an offer, what is the most likely reason?",
        opts: [
            "The letter did not specify the terms of payment[cite: 5].",
            "The letter did not specify a manner of acceptance[cite: 5].",
            "The letter was an acceptance of the offer contained in the buyer's first letter[cite: 5].",
            "The letter did not manifest a willingness to be bound[cite: 5]."
        ],
        ans: 3,
        exp: "(D) is the correct response. An offer is a manifestation of willingness to enter into a bargain, so made as to justify another person in understanding that his assent to that bargain is invited and will conclude it (Restatement § 24)[cite: 5]. The dealer's letter asked 'Are you still interested?' and 'Let me know if the price is acceptable.' This language indicates the dealer was merely inquiring about the buyer's ongoing interest and inviting the buyer to make an offer, rather than manifesting a definitive present intent to be bound[cite: 5]. Thus, it was a preliminary solicitation[cite: 5]. (A) is incorrect because omitting a payment term does not defeat an offer; the law implies payment on delivery[cite: 5]. (B) is incorrect because an offer need not specify a manner of acceptance; any reasonable medium suffices[cite: 5]. (C) is incorrect because the buyer's initial letter was too indefinite ('good piece', 'don't care about cost') to be a valid offer[cite: 5]."
    },
    {
        id: 14,
        topic: "Assignment & Delegation / Prohibition Against Assignment",
        fp: "A banking firm hired a computer specialist to update its network for $15,000. To pay off a debt, the specialist assigned her right to receive the $15,000 payment to a programmer. After the work was completed, the firm refused to pay. The programmer sued the firm.",
        q: "Which fact would most likely lead to a judgment for the firm?",
        opts: [
            "The contract contained a clause stating it may not be modified except by a signed writing[cite: 5].",
            "The programmer was not a specialist in banking technology[cite: 5].",
            "The firm paid $15,000 to the specialist prior to being notified of the assignment[cite: 5].",
            "The contract did not contain a clause permitting assignment[cite: 5]."
        ],
        ans: 2,
        exp: "(C) is the correct response. An assignment transfers the assignor's contract rights to the assignee. However, the obligor (the firm) is not bound by the assignment until they receive adequate notice of it[cite: 5]. If the obligor, in good faith and without notice of the assignment, pays the assignor, the obligor's contractual duty is fully discharged[cite: 5]. Because the firm paid the specialist before being notified of the assignment to the programmer, the firm owes nothing more. The programmer must collect from the specialist[cite: 5]. (A) is incorrect because an assignment is a transfer of rights, not a modification of the contract terms[cite: 5]. (B) is incorrect because the programmer is merely receiving payment, not performing the technical duties[cite: 5]. (D) is incorrect because contract rights are freely assignable under the common law and UCC unless expressly prohibited[cite: 5]."
    },
    {
        id: 15,
        topic: "Formation / UCC 2-209 Modification (Without Consideration)",
        fp: "A veterinarian and a rancher agreed that the veterinarian would sell an aardvark to the rancher for $450, delivery on March 20. On March 15, the rancher called and said: 'When you deliver the aardvark, will you throw in a pig for my daughter without charging extra?' The veterinarian said 'Yes.' However, on delivery, she refused to give the rancher the pig. The rancher sued.",
        q: "Why would a court decide in the rancher's favor?",
        opts: [
            "The conversation on March 15 resulted in a valid modification of the existing contract[cite: 5].",
            "The plaintiff and the defendant were merchants with respect to the sale of an aardvark[cite: 5].",
            "Her promise to give the pig was supported by fresh consideration[cite: 5].",
            "Her promise was an independent collateral agreement[cite: 5]."
        ],
        ans: 0,
        exp: "(A) is the correct response. Because the transaction involves the sale of animals, it is a sale of goods governed by UCC Article 2. Under UCC § 2-209(1), an agreement modifying a contract for the sale of goods needs no consideration to be binding[cite: 5]. The veterinarian's oral agreement to add the pig for the same $450 price was a valid modification of the existing contract[cite: 5]. Furthermore, because the modified contract price remained $450, it did not trigger the Statute of Frauds ($500 threshold), meaning the oral modification was fully enforceable[cite: 5]. (B) is incorrect because the rule allowing modifications without consideration applies to all sales of goods under the UCC, not just those between merchants[cite: 5]. (C) is incorrect because the rancher provided no fresh consideration (he paid the same $450)[cite: 5]. (D) is incorrect because it was a modification of the delivery terms of the existing sale, not a separate contract[cite: 5]."
    },
    {
        id: 16,
        topic: "Performance / Notice of Defect (UCC 2-607)",
        fp: "A retailer ordered 1,000 8-foot boards from a wholesaler. On January 15, the wholesaler delivered boards that were only 7 feet long. The retailer noticed the defect immediately but forgot to notify the wholesaler. On February 20, the wholesaler billed the retailer. On May 15, the wholesaler sued for the price. The retailer defended, claiming the boards did not conform to the contract.",
        q: "Is the wholesaler entitled to the price of the boards?",
        opts: [
            "No, because the boards did not conform to the contract of sale[cite: 5].",
            "Yes, because the retailer failed to inform him that the boards were only 7 feet in length within a reasonable time[cite: 5].",
            "Yes, because a merchant buyer who accepts nonconforming goods is bound to pay the contract price without setoff[cite: 5].",
            "No, because a merchant seller cannot demand the price of nonconforming goods if inspection would have disclosed the defect[cite: 5]."
        ],
        ans: 1,
        exp: "(B) is the correct response. Under UCC § 2-602 and § 2-606, acceptance of goods occurs when the buyer fails to make an effective rejection after having a reasonable opportunity to inspect them[cite: 5]. Rejection must be made within a reasonable time after delivery, and the buyer must seasonably notify the seller[cite: 5]. Because the retailer waited four months to notify the seller of the obvious defect, the retailer legally accepted the goods[cite: 5]. Furthermore, under UCC § 2-607(3)(a), a buyer who accepts goods must notify the seller of any breach within a reasonable time or be barred from any remedy[cite: 5]. Thus, the wholesaler is entitled to the full contract price[cite: 5]. (A) is incorrect because failing to reject nonconforming goods results in acceptance and liability for the price[cite: 5]. (C) is incorrect because a buyer who properly notifies the seller of a defect *can* claim a setoff for damages, but here the buyer failed to give notice[cite: 5]. (D) is incorrect because it inaccurately states the law of inspection and acceptance[cite: 5]."
    },
    {
        id: 17,
        topic: "Assignment & Delegation / Defenses Against Assignee",
        fp: "On June 1, a pawnbroker sold a ring to a jewelry store for $2,500, representing it as a diamond. On July 16, the buyer learned it was a cubic zirconia worth $300. On July 17, the pawnbroker assigned the sales contract (the right to the $2,500) to a retailer for $1,500 cash. The retailer requested payment from the buyer, who refused. The retailer sued the buyer, but lost because of the fraud defense. The retailer then sued the pawnbroker.",
        q: "Should the court find in the retailer's favor against the pawnbroker?",
        opts: [
            "Yes, because an assignment for consideration implies a warranty that the obligor will perform[cite: 5].",
            "No, because an assignment does not imply a warranty that the obligor will perform[cite: 5].",
            "Yes, because the buyer's defense existed at the time the assignment was made by the pawnbroker to the retailer[cite: 5].",
            "No, because the assignment to the retailer caused the retailer to step into the pawnbroker's shoes[cite: 5]."
        ],
        ans: 2,
        exp: "(C) is the correct response. When an assignor assigns a contract right for value, the assignor makes implied warranties to the assignee (Restatement § 333)[cite: 5]. Specifically, the assignor implicitly warrants that the assigned right actually exists and is not subject to any defenses or limitations other than those stated or apparent at the time of the assignment[cite: 5]. Because the pawnbroker's fraud created a valid defense for the buyer that existed at the time of the assignment, the pawnbroker breached this implied warranty to the retailer[cite: 5]. The retailer can recover from the pawnbroker[cite: 5]. (A) is incorrect because an assignor does NOT impliedly warrant that the obligor is solvent or will actually perform; they only warrant that the right is legally valid and unencumbered by hidden defenses[cite: 5]. (B) and (D) are incorrect because while the assignee steps into the assignor's shoes against the *obligor*, the assignee retains warranty claims against the *assignor* if the right was defective[cite: 5]."
    },
    {
        id: 18,
        topic: "Excuse / Commercial Impracticability vs Requirements",
        fp: "A butcher agreed to provide a restaurant with 'as many top quality steaks at $10 per pound as the restaurant decides to order.' A week later, cattle feed prices surged. The butcher told the restaurant it was impossible to provide top quality steaks for less than $15 per pound, offering lower quality at the original price. The restaurant, planning a convention, demanded top quality and sued.",
        q: "How should the court rule?",
        opts: [
            "In favor of the restaurant, because of its detrimental reliance[cite: 5].",
            "In favor of the butcher, under the doctrine of impossibility[cite: 5].",
            "In favor of the restaurant, because this is a valid requirements contract[cite: 5].",
            "In favor of the butcher, because the restaurant's promise is illusory[cite: 5]."
        ],
        ans: 3,
        exp: "(D) is the correct response. A promise to buy 'as many steaks as the restaurant decides to order' reserves complete, unfettered discretion to the buyer. Because the restaurant did not promise to buy all of its actual requirements in good faith, but merely what it 'decided' to order, the restaurant made no legal commitment whatsoever (Restatement § 77)[cite: 5]. An illusory promise cannot serve as consideration for the return promise of the seller. Therefore, the agreement lacked mutuality of obligation and was void[cite: 5]. (A) is incorrect because planning a convention is not legally justifiable detrimental reliance on an illusory promise[cite: 5]. (B) is incorrect because a feed price surge is a foreseeable market fluctuation that does not trigger impossibility/impracticability[cite: 5]. (C) is incorrect because a valid requirements contract requires a commitment to buy all actual good-faith requirements, not merely what the buyer arbitrarily decides to order[cite: 5]."
    },
    {
        id: 19,
        topic: "Excuse / Frustration of Purpose (Legality)",
        fp: "On February 1, a landlord and tenant signed a two-year lease for a building to be used as a 'sports book' for gambling. The tenant paid a $2,000 deposit. At the time, sports books were legal. On April 1, before the lease commenced, a new state law prohibited the operation of sports books. The tenant sued for the return of his deposit.",
        q: "Is the tenant entitled to the return of his deposit?",
        opts: [
            "No, because public policy prohibits the enforcement of gambling contracts[cite: 5].",
            "Yes, under the doctrine of frustration of purpose[cite: 5].",
            "No, because the purpose of the agreement has become illegal[cite: 5].",
            "Yes, because the tenant and landlord were not in pari delicto[cite: 5]."
        ],
        ans: 1,
        exp: "(B) is the correct response. Under the doctrine of frustration of purpose (Restatement § 265) and supervening impracticability/illegality (Restatement § 264), if performance becomes illegal due to a change in the law after the contract is formed, the parties are discharged from their executory obligations[cite: 5]. Furthermore, under restitutionary principles, a party whose performance is discharged by supervening impossibility or frustration is entitled to restitution of any benefits conferred (like an advance deposit) to prevent unjust enrichment[cite: 5]. Therefore, the tenant is excused from the lease and entitled to a refund of the deposit[cite: 5]. (A) is incorrect because the contract was legal when made; the court will order restitution to unwind the frustrated legal contract[cite: 5]. (C) is incorrect because the supervening illegality is exactly what justifies the refund under frustration/impossibility[cite: 5]. (D) is incorrect because pari delicto applies to parties engaging in illegal contracts; this contract was legal at formation[cite: 5]."
    },
    {
        id: 20,
        topic: "Breach / Anticipatory Repudiation & Retraction",
        fp: "A farmer contracted to sell 2,000 bushels of apples to a restaurant, delivery in June. In April, heavy rains destroyed part of her crop. On April 15, she called the restaurant: 'I can only deliver 1,000 bushels.' The restaurant replied: 'I'll take whatever you deliver, but I'm holding you to the contract.' The restaurant immediately contracted with another supplier for 1,000 bushels. On June 15, the farmer delivered 2,000 bushels. The restaurant refused to accept more than 1,000.",
        q: "If the farmer sues the restaurant for breach, what is the restaurant's most effective defense?",
        opts: [
            "Anticipatory repudiation[cite: 5].",
            "Impossibility of performance[cite: 5].",
            "Novation[cite: 5].",
            "Nudum pactum[cite: 5]."
        ],
        ans: 0,
        exp: "(A) is the correct response. The farmer's statement on April 15 that she could only deliver half the contracted amount was a clear and unequivocal manifestation of intent not to perform the full contract, constituting an anticipatory repudiation[cite: 5]. Upon receiving an anticipatory repudiation, the aggrieved party (the restaurant) is entitled to treat the contract as breached and cover by purchasing substitute goods[cite: 5]. Once the aggrieved party materially changes position in reliance on the repudiation (by signing a cover contract with the other supplier), the repudiating party permanently loses the power to retract the repudiation (UCC § 2-611)[cite: 5]. Therefore, the farmer's attempt to deliver all 2,000 bushels in June was an ineffective retraction, and the restaurant was justified in refusing the excess[cite: 5]. (B) is incorrect because impossibility is a defense for the performing party, not the buyer[cite: 5]. (C) is incorrect because novation requires mutual agreement to substitute a party[cite: 5]. (D) is incorrect because nudum pactum refers to an agreement lacking consideration[cite: 5]."
    },
    {
        id: 21,
        topic: "Remedies / Mutual Rescission & Executory Duties",
        fp: "A developer contracted to buy a farm for $500,000, closing September 5. On September 1, the farmer called: 'I can't go through with this. Can we just forget the contract?' The developer said it was fine if the farmer wanted out. On September 2, the developer bought a different property. On September 3, the developer called back: 'I want to go through with our original closing.' The farmer refused. The developer sued.",
        q: "May the developer recover for breach of contract?",
        opts: [
            "Yes, because any contract modification must be in writing under the Statute of Frauds[cite: 5].",
            "Yes, because the farmer did not act in good faith[cite: 5].",
            "No, because the farmer acted in reliance on the developer's statements[cite: 5].",
            "No, because the developer explicitly agreed to cancel the contract, creating a mutual rescission[cite: 5]."
        ],
        ans: 3,
        exp: "(D) is the correct response. As long as a contract remains wholly or partially executory on both sides, the parties can mutually agree to cancel the contract. This is known as a mutual rescission[cite: 5]. The agreement to rescind is supported by consideration because each party surrenders their right to the other's performance[cite: 5]. When the farmer asked to forget the contract and the developer agreed, an oral mutual rescission occurred, instantly discharging both parties' obligations under the original contract[cite: 5]. The developer cannot unilaterally revive the contract two days later[cite: 5]. (A) is incorrect because an oral mutual rescission of a contract within the Statute of Frauds is generally effective, provided it does not transfer property back[cite: 5]. (B) is incorrect because the farmer asked for rescission openly, which is not bad faith[cite: 5]. (C) is incorrect because mutual rescission is binding via mutual exchange of promises; detrimental reliance by the farmer is not strictly necessary to enforce the rescission[cite: 5]."
    },
    {
        id: 22,
        topic: "Statute of Frauds / Merchants' Confirmatory Memo",
        fp: "A sporting goods store phoned a distributor and ordered 200 jerseys at $50 each. Three days later, the distributor mailed a signed letter: 'This confirms your order of 200 jerseys, total $10,000.' The store received and read the letter on January 3. The jerseys arrived on January 4. On January 14, the store called the distributor: 'We never agreed to buy these. We're sending them back.'",
        q: "Is the agreement enforceable?",
        opts: [
            "No, because the agreement violates the Statute of Frauds[cite: 5].",
            "Yes, because the agreement is between merchants and the store failed to object to the confirmation within ten days[cite: 5].",
            "No, because the store informed the distributor it didn't order the jerseys within 14 days of receipt[cite: 5].",
            "Yes, because the distributor provided consideration by sending the jerseys[cite: 5]."
        ],
        ans: 1,
        exp: "(B) is the correct response. Under UCC § 2-201(1), a contract for the sale of goods for $500 or more must be in writing. However, under the merchant's confirmatory memo exception (UCC § 2-201(2)), if between merchants one party sends a written confirmation sufficient against the sender, and the recipient has reason to know its contents, it satisfies the Statute of Frauds against the recipient unless written notice of objection is given within 10 days of receipt[cite: 5]. The store received the letter on January 3 but did not object until January 14 (11 days later)[cite: 5]. Therefore, the store lost its Statute of Frauds defense, and the oral agreement is fully enforceable[cite: 5]. (A) is incorrect because the confirmatory memo exception cures the Statute of Frauds defect[cite: 5]. (C) is incorrect because the statutory window for objection is strictly 10 days, not 14 days[cite: 5]. (D) is incorrect because sending goods does not cure the Statute of Frauds if the buyer refuses to accept them (UCC § 2-201(3)(c))[cite: 5]."
    },
    {
        id: 23,
        topic: "Assignment & Delegation / Liability of Delegator",
        fp: "A fumigator contracted to fumigate a bank's building four times a year for four years, paid $10,000 upfront. After two years, the fumigator sold her business to a trucker, delegating the balance of the contract. The bank consented to the assignment. The trucker subsequently failed to perform. The bank sought the return of the unearned portion of the money.",
        q: "From whom may the bank collect?",
        opts: [
            "The trucker only[cite: 5].",
            "Neither the woman nor the trucker, because the bank's only remedy is to cover[cite: 5].",
            "Either the fumigator or the trucker[cite: 5].",
            "The fumigator only[cite: 5]."
        ],
        ans: 2,
        exp: "(C) is the correct response. When a party delegates their contractual duties to a third party, the delegator (the original fumigator) remains secondarily liable for the performance of the contract unless the obligee expressly releases them through a novation[cite: 5]. Merely consenting to an assignment or delegation does not constitute a novation[cite: 5]. Therefore, the original fumigator remains liable. Furthermore, when the delegatee (the trucker) assumes the duties (as is standard in a sale of business involving assignment of contracts under UCC 2-210), the delegatee becomes primarily liable to the obligee (the bank) as an intended third-party beneficiary of the assumption agreement[cite: 5]. Because both parties are liable, the bank may collect from either the fumigator or the trucker[cite: 5]. (A) is incorrect because the original party remains liable as a surety[cite: 5]. (D) is incorrect because the delegatee who assumes the duties is also liable[cite: 5]. (B) is incorrect because the bank is entitled to restitution of the unearned pre-paid funds[cite: 5]."
    },
    {
        id: 24,
        topic: "Third-Party Beneficiaries / Vesting & Termination",
        fp: "During negotiations with a printing company, a publisher agreed to hire the company president's wife as a cover artist for a year in exchange for a lower printing rate. The artist was thrilled and immediately canceled all her other clients. Six months later, the president and the artist divorced. The president called the publisher and explicitly released the publisher from the promise to hire the artist. The publisher fired the artist.",
        q: "Is the artist entitled to damages resulting from breach of the promise to hire her for one year?",
        opts: [
            "No, because the publisher's promise was not in writing[cite: 5].",
            "Yes, because the artist was an intended third-party beneficiary whose rights had vested through detrimental reliance[cite: 5].",
            "No, because the publisher and the president mutually rescinded their contract[cite: 5].",
            "Yes, because an assignment of employment rights cannot be revoked[cite: 5]."
        ],
        ans: 1,
        exp: "(B) is the correct response. The artist was an intended third-party beneficiary of the contract between the printing company and the publisher because the publisher's performance (hiring her) was meant to benefit her directly[cite: 5]. A third-party beneficiary's rights vest when they manifest assent, bring suit, or materially change position in justifiable reliance on the promise (Restatement § 311)[cite: 5]. By canceling all her other clients, the artist detrimentally relied on the contract, causing her rights to vest[cite: 5]. Once vested, the original contracting parties lose the power to modify, release, or rescind the agreement without the beneficiary's consent[cite: 5]. The president's attempt to release the publisher was therefore void, and the artist is entitled to damages for the remaining six months[cite: 5]. (A) is incorrect because an employment contract for exactly one year starting immediately does not violate the Statute of Frauds[cite: 5]. (C) is incorrect because the parties lost the power to rescind once the rights vested[cite: 5]. (D) is incorrect because this was a third-party beneficiary contract, not an assignment[cite: 5]."
    },
    {
        id: 25,
        topic: "Consideration / Promissory Estoppel",
        fp: "A soldier informed her father she was retiring. Glad to hear it, the father agreed to give her a house built on his land as a present. Thrilled, the soldier canceled her contract to buy another house. The father signed a contract with a builder. Discovering costs were too high, the father and builder modified the plans to build a much smaller house. The soldier sued her father for changing the plans.",
        q: "What is the soldier's most effective argument in support of her claim?",
        opts: [
            "The soldier's retirement from military service was consideration for her father's promise to build the house according to the plans[cite: 5].",
            "The contract between the father and the builder was a writing signed by the father[cite: 5].",
            "The soldier detrimentally relied on her father's oral promise by canceling the contract to purchase another home[cite: 5].",
            "The modification of the father's contract with the builder was unsupported by consideration[cite: 5]."
        ],
        ans: 2,
        exp: "(C) is the correct response. A promise to make a gift is generally unenforceable for lack of consideration[cite: 5]. However, under the doctrine of promissory estoppel (Restatement § 90), a promise that the promisor should reasonably expect to induce action or forbearance, and which does induce such action or forbearance, is binding if injustice can be avoided only by enforcement[cite: 5]. The soldier justifiably relied on her father's promise of the specific house by canceling her contract to buy another home[cite: 5]. This detrimental reliance substitutes for consideration, making the father's oral promise to provide the house according to the original plans enforceable[cite: 5]. (A) is incorrect because her retirement was already planned/announced before the father's promise, making it past consideration rather than bargained-for exchange[cite: 5]. (B) is incorrect because the writing with the builder does not form a contract with the daughter[cite: 5]. (D) is incorrect because the father's modification with the builder is valid under standard contract law; the daughter's rights against the father arise from promissory estoppel, not the builder's contract[cite: 5]."
    }
];