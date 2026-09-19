// BabyBar-Contracts-57.js
// Total Questions: 25
// Subject: Contracts (Common Law & UCC Article 2) ONLY
// Standard: Master Tier 5 / First-Year Law Students' Examination (Baby Bar) Benchmark
const examData = [
    {
        id: 1,
        topic: "Performance / Divisible Contracts",
        fp: "A mechanic contracted to fully restore four classic vehicles for $5,000 each. The contract stated the owner would pay $20,000 upon completion of all four cars. The mechanic finished two cars but did not ask for payment. After finishing the third car, he demanded $15,000. The owner refused. The mechanic quit without touching the fourth car.",
        q: "Is the owner obligated to make the $15,000 payment?",
        opts: [
            "No, because the owner has no duty under the contract to pay anything until all four cars have been restored.",
            "No, because the mechanic waived his right to payment by not demanding it after the first car.",
            "Yes, because the contract is divisible.",
            "Yes, because the mechanic has substantially performed the entire contract."
        ],
        ans: 0,
        exp: "(A) is the correct response. Where the performance of one party takes a period of time (restoring cars) and the other party's does not (paying money), the performance taking time must be completed before the payment is due, unless the contract indicates otherwise[cite: 6]. Because the contract explicitly stated payment of $20,000 was due 'upon completion of all four cars,' the contract was not divisible, and the mechanic had to finish all four before any payment was owed[cite: 6]. (B) is incorrect because there was no right to per-car payment to waive[cite: 6]. (C) is incorrect because the parties expressly agreed to a single lump-sum payment at the end, defeating divisibility[cite: 6]. (D) is incorrect because finishing three of four cars (75%) is generally insufficient for substantial performance, and regardless, the mechanic willfully abandoned the job[cite: 6]."
    },
    {
        id: 2,
        topic: "Formation / Unilateral Contract Revocation",
        fp: "A car dealership hung a banner: 'New Customers! $50 if you test drive a car for 30 minutes! (Offer may be withdrawn at any time).' A customer started a test drive. At minute 25, the manager pulled the banner down and announced the promotion was over. The customer drove for five more minutes and demanded $50.",
        q: "Will the customer prevail?",
        opts: [
            "No, because the dealership withdrew its offer before the customer completed the performance.",
            "Yes, because the customer's presence in the car served as notice of acceptance.",
            "No, because the dealership's statement was a non-binding gift promise.",
            "Yes, because the dealership could not revoke its offer once the customer commenced performance."
        ],
        ans: 3,
        exp: "(D) is the correct response. An offer that requires acceptance by performance is an offer for a unilateral contract[cite: 6]. Under Restatement § 45, an offer for a unilateral contract becomes irrevocable once the offeree begins the requested performance, creating an option contract that gives the offeree time to finish[cite: 6]. Because the customer had already started the test drive, the dealership lost the power to revoke the offer[cite: 6]. The 'may be withdrawn' clause applies only to customers who had not yet started[cite: 6]. (A) is incorrect because the offer became irrevocable upon commencement[cite: 6]. (B) is incorrect because unilateral contracts do not require notice of acceptance, only performance[cite: 6]. (C) is incorrect because the dealership bargained for the test drive, providing consideration[cite: 6]."
    },
    {
        id: 3,
        topic: "Statute of Frauds / Third-Party Beneficiary",
        fp: "A graduate student signed a nine-month lease for $800 a month. She paid through December but missed January. The landlord threatened eviction. The student called her uncle, who promised that if she delayed her planned marriage until graduation, he would pay her rent and give her a $300 monthly allowance. She agreed. The uncle wrote the landlord: 'I will pay the rent she owes and her rent through May.' The uncle died suddenly. The student stayed through May but the estate rejected her claim for the $300 monthly allowance.",
        q: "In a suit against the estate for the allowance, will the student be successful?",
        opts: [
            "No, because the uncle's death terminated the offer.",
            "Yes.",
            "No, because the student's contract with her uncle was illegal.",
            "No, because the student's contract with her uncle was not in writing."
        ],
        ans: 1,
        exp: "(B) is the correct response. The student will be successful[cite: 6]. The uncle offered a unilateral/bilateral contract: allowance and rent in exchange for delaying marriage. The student's detriment (delaying marriage) provided valid consideration[cite: 6]. Delaying marriage is not illegal (unlike contracts demanding absolute restraint of marriage or divorce)[cite: 6]. The uncle's death did not terminate the contract because it was already accepted and formed[cite: 6]. Finally, while the promise to pay the *rent* to the landlord was a suretyship requiring a writing, the promise to pay the $300 *allowance* to the student was NOT a promise to pay the debt of another. Therefore, the allowance promise did not fall within the Statute of Frauds and was enforceable orally[cite: 6]. (A) is incorrect because the contract was already formed. (C) is incorrect because delaying a marriage is not against public policy. (D) is incorrect because the allowance promise is outside the Statute of Frauds[cite: 6]."
    },
    {
        id: 4,
        topic: "Consideration / Settlement of Invalid Claim",
        fp: "A chef bought the front half of a lot. The back half was disputed between a brother and sister in probate. The sister's attorney told her the claim was doubtful. The chef agreed in writing to pay the sister $6,000 for a quitclaim deed to the back half. She executed the deed. Later, the probate court ruled the sister had absolutely no interest in the land. The chef defaulted on his payments to the sister.",
        q: "In an action against the chef, will the sister prevail?",
        opts: [
            "No, because the sister suffered no legal detriment in executing the quitclaim deed.",
            "Yes, because the chef bargained for and received a quitclaim deed from the sister.",
            "Yes, because the chef, by paying the first installment, is estopped from denying the contract.",
            "No, because she was aware her claim was doubtful at the time of the agreement."
        ],
        ans: 1,
        exp: "(B) is the correct response. Surrender of a claim that proves to be invalid constitutes valid consideration if the surrendering party believed in good faith that the claim might be valid (Restatement § 74)[cite: 6]. The sister knew her claim was 'doubtful,' but did not know it was definitively invalid. Therefore, her surrender of the claim via the quitclaim deed constituted valid consideration for the chef's promise to pay[cite: 6]. (A) is incorrect because surrendering a doubtful claim is a legal detriment[cite: 6]. (C) is incorrect because estoppel is unnecessary where actual consideration exists[cite: 6]. (D) is incorrect because knowing a claim is merely 'doubtful' does not equate to bad faith assertion of a known invalid claim[cite: 6]."
    },
    {
        id: 5,
        topic: "Consideration / Promissory Estoppel",
        fp: "An executive worked for a company for 20 years. The company president gave him a signed board resolution stating: 'When you retire, we will pay you a $5,000-a-month lifetime pension.' The executive immediately retired and bought a $100,000 yacht. The company paid for six months, then stopped due to budget cuts. The executive was unemployable elsewhere and sued.",
        q: "Will the executive prevail?",
        opts: [
            "No, because the company's promise to him was an unenforceable gift promise.",
            "Yes, because he retired as bargained-for consideration for the pension.",
            "Yes, because he timed his decision to retire and buy the yacht in reasonable reliance on the promise.",
            "No, because he had been an employee-at-will."
        ],
        ans: 2,
        exp: "(C) is the correct response. Under the doctrine of promissory estoppel (Restatement § 90), a promise without consideration is binding if the promisor should reasonably expect it to induce action or forbearance, it does induce such action, and injustice can only be avoided by enforcement[cite: 6]. The company did not bargain for his retirement (the resolution said 'when and if'), so there was no traditional consideration[cite: 6]. However, the executive foreseeably relied on the promise by retiring, buying a yacht, and becoming unemployable. This detrimental reliance makes the promise enforceable[cite: 6]. (A) is incorrect because promissory estoppel cures the lack of consideration[cite: 6]. (B) is incorrect because the retirement was a condition of a gift, not bargained for as the price of the promise[cite: 6]. (D) is incorrect because at-will status does not defeat subsequent promissory estoppel[cite: 6]."
    },
    {
        id: 6,
        topic: "Consideration / Legal Detriment",
        fp: "A business owner promised to pay a weightlifter $500 if she could bench press 200 pounds on Saturday. She did so. The owner then discovered she had been bench-pressing 200 pounds every day for a year as part of her routine. He refused to pay.",
        q: "What is the probable decision of the court?",
        opts: [
            "The owner wins, because it is inferred his promise did not induce the act.",
            "The weightlifter wins, because bench pressing 200 pounds is significantly demanding.",
            "The owner wins, because the act was beneficial, not detrimental, to her.",
            "The weightlifter wins, because she performed the requested act, and her motives are irrelevant."
        ],
        ans: 3,
        exp: "(D) is the correct response. Consideration requires a bargained-for exchange involving a legal detriment. A legal detriment is performing any act one is not legally obligated to perform[cite: 6]. Because the weightlifter had no legal obligation to bench press the weight on that specific Saturday, doing so at the owner's request constituted a legal detriment[cite: 6]. Her personal motives—and the fact that she would have done it anyway—are legally irrelevant[cite: 6]. (A) is incorrect because the owner bargained for the act on that specific day and got it[cite: 6]. (B) is incorrect because the difficulty of the act is irrelevant to consideration[cite: 6]. (C) is incorrect because 'detriment' in contract law means a legal detriment, not physical or economic harm; doing something healthy still qualifies[cite: 6]."
    },
    {
        id: 7,
        topic: "Third-Party Beneficiaries / Creditor Beneficiary",
        fp: "A plumber owed a bank $10,000. The plumber contracted to do work for a homeowner, and the homeowner agreed to pay the $10,000 to the bank within 30 days of completion. The plumber finished, but there were $1,000 in minor deficiencies. The bank demanded payment from the homeowner.",
        q: "What amount is the homeowner obligated to pay the bank?",
        opts: [
            "Nothing, because the bank is an incidental beneficiary.",
            "Nothing, because the plumber's breach discharged the obligation.",
            "$9,000, because the bank stands in the position of the plumber.",
            "$10,000, and the homeowner can seek damages from the plumber."
        ],
        ans: 2,
        exp: "(C) is the correct response. The bank is an intended creditor beneficiary of the contract[cite: 6]. However, a third-party beneficiary stands in the shoes of the promisee (the plumber) and is subject to any defenses or offsets the promisor (the homeowner) has against the promisee[cite: 6]. Because the homeowner could offset the $1,000 in damages against the plumber's $10,000 fee, the homeowner can assert the exact same offset against the bank, reducing the obligation to $9,000[cite: 6]. (A) is incorrect because the bank was specifically named to receive payment to satisfy a debt, making it an intended beneficiary[cite: 6]. (B) is incorrect because minor deficiencies constitute substantial performance, not a material breach that discharges the entire contract[cite: 6]. (D) is incorrect because the homeowner can assert the offset directly against the bank[cite: 6]."
    },
    {
        id: 8,
        topic: "Consideration / Adequacy",
        fp: "An aunt wrote to her nephew: 'If you move in and take care of my cabin for the rest of my life, I will leave it to you in my will.' The nephew moved in. Three weeks later, the aunt died in an accident. Her will left the $150,000 cabin to her sister. The nephew sued the estate.",
        q: "What are the rights of the nephew?",
        opts: [
            "He receives the cabin, because the letter and services created a valid contract.",
            "He receives the reasonable value of three weeks' service, because three weeks is inadequate consideration for a $150,000 cabin.",
            "He receives the reasonable value of his services because the letter was an invalid promise to make a will.",
            "The estate can rescind because the early death was an unforeseen circumstance."
        ],
        ans: 0,
        exp: "(A) is the correct response. The aunt made an offer for a unilateral contract, which the nephew accepted by moving in and caring for the cabin until her death[cite: 6]. Courts generally do not inquire into the adequacy of consideration[cite: 6]. The fact that the aunt died after only three weeks does not invalidate the consideration, as the nephew assumed the risk she might live for decades, and she assumed the risk she might die immediately[cite: 6]. The contract is fully enforceable, and he is entitled to the cabin[cite: 6]. (B) is incorrect because courts do not require equivalence in value[cite: 6]. (C) is incorrect because a contractual promise to leave property in a will is enforceable[cite: 6]. (D) is incorrect because death is a foreseeable event, not an excuse for impossibility here[cite: 6]."
    },
    {
        id: 9,
        topic: "Defenses / Infancy & Ratification",
        fp: "A 17-year-old bought a drone on credit for $200. Upon turning 18, he told the seller: 'I know I owe you $200, but it's only worth $150, so I promise to pay you $150.' He later refused to pay anything. The seller sued.",
        q: "What is the seller's probable recovery?",
        opts: [
            "Nothing, because there was no consideration for the promise made after reaching majority.",
            "$200.",
            "Nothing, because he was a minor at the time of the original transaction.",
            "$150."
        ],
        ans: 3,
        exp: "(D) is the correct response. A contract entered into by a minor is voidable. However, a promise to perform all or part of an antecedent contractual obligation that was voidable due to infancy is binding WITHOUT new consideration if made after reaching the age of majority[cite: 6]. Because the buyer partially reaffirmed the debt by explicitly promising to pay $150 after turning 18, that new promise is enforceable[cite: 6]. (A) is incorrect because reaffirming a voidable duty does not require fresh consideration[cite: 6]. (B) is incorrect because he only reaffirmed $150 of the debt, not the full $200[cite: 6]. (C) is incorrect because post-majority ratification cures the original incapacity[cite: 6]."
    },
    {
        id: 10,
        topic: "Formation / Option Contracts",
        fp: "A landowner granted a developer an option to buy a warehouse for $100,000 within 30 days, in exchange for $100 paid by the developer. The contract stated: 'This option is effective only if the $100 is paid.' On day 20, the landowner sold the warehouse to a third party. On day 21, the developer mailed a $100 check and a letter exercising the option. The developer was unaware of the sale.",
        q: "Which fact best supports the developer's suit for breach?",
        opts: [
            "The developer applied for a bank loan on day 15.",
            "The developer and landowner are both real estate professionals.",
            "The landowner said 'Don't worry about the $100, the recital makes it binding.'",
            "The developer was unaware of the sale to the third party when he mailed the check."
        ],
        ans: 3,
        exp: "(D) is the correct response. Because the option was expressly conditioned on actual payment of the $100, no option contract was formed until day 21. Before that, the landowner's proposal was merely a revocable offer[cite: 6]. An offer is revoked if the offeror sells the property to someone else AND the offeree receives reliable information of that sale (indirect revocation)[cite: 6]. Because the developer was UNAWARE of the sale when he accepted the offer and paid the $100 on day 21, the offer had not been effectively revoked, and his acceptance formed a binding contract[cite: 6]. (A) is incorrect because preparing for performance (getting a loan) does not make an offer irrevocable[cite: 6]. (B) is incorrect because the UCC firm offer rule does not apply to real estate[cite: 6]. (C) is incorrect because the express condition requiring actual payment overrides the oral statement[cite: 6]."
    },
    {
        id: 11,
        topic: "Consideration / Modification (Common Law)",
        fp: "A contractor agreed to build a pool and a deck for $50,000. During construction, the owner orally agreed the contractor would not have to build the deck, but would still get $50,000. After the pool was finished, the owner demanded the deck. The contractor refused.",
        q: "Has the contractor breached?",
        opts: [
            "Yes, because the parol evidence rule bars proof of the oral modification.",
            "Yes, because there was no consideration for the discharge of the duty to build the deck.",
            "No, because the modification was in good faith.",
            "No, because a discharge of a contract obligation doesn't need to be in writing."
        ],
        ans: 1,
        exp: "(B) is the correct response. Under the common law pre-existing duty rule, a modification requires fresh consideration to be valid. The contractor provided no new consideration for the owner's promise to release him from the duty to build the deck (in fact, he promised to do less than he was originally bound to do)[cite: 6]. Therefore, the modification releasing him from the deck duty was unenforceable for lack of consideration. The original contract remained in force, and the contractor breached[cite: 6]. (A) is incorrect because the Parol Evidence Rule applies to prior agreements, not subsequent modifications[cite: 6]. (C) is incorrect because the 'good faith' exception applies to UCC sales of goods, not common law service contracts[cite: 6]. (D) is incorrect because even if oral, it fails for lack of consideration[cite: 6]."
    },
    {
        id: 12,
        topic: "Formation / Mailbox Rule",
        fp: "An aunt mailed a letter: 'I might sell my boat. I would consider $10,000.' The nephew replied: 'I will buy it for $10,000.' The aunt received this on May 5, and on May 6 mailed a note: 'It's a deal.' On May 7, the nephew phoned to cancel his offer.",
        q: "What is the status of the contract?",
        opts: [
            "There is a contract as of May 3.",
            "There is a contract as of May 5.",
            "There is no contract.",
            "There is a contract as of May 6."
        ],
        ans: 3,
        exp: "(D) is the correct response. The aunt's first letter ('I would consider') was a solicitation of offers[cite: 6]. The nephew's reply ('I will buy it') was an offer[cite: 6]. The aunt's May 6 letter ('It's a deal') was an acceptance[cite: 6]. Under the mailbox rule, an acceptance is effective upon proper dispatch[cite: 6]. Therefore, a binding contract was formed on May 6 when the aunt mailed the letter. The nephew's attempt to revoke his offer on May 7 was too late[cite: 6]. (A) is incorrect because the nephew made an offer, not an acceptance. (B) is incorrect because receiving an offer does not form a contract. (C) is incorrect because a contract was formed[cite: 6]."
    },
    {
        id: 13,
        topic: "Parol Evidence / Trade Usage vs Express Terms",
        fp: "A motel owner signed a contract for 'daily' cleaning services at $500 a week. The cleaning company knew the owner expected Sunday service. When the company refused to clean on Sundays, the owner sued. The company introduced evidence that in the commercial cleaning industry, 'daily' excludes Sundays.",
        q: "Will the cleaning company succeed in its defense?",
        opts: [
            "Yes, because trade usage controls the interpretation of 'daily'.",
            "No, because the parties attached materially different meanings, so no contract formed.",
            "Yes, because the parol evidence rule bars the owner from proving her meaning.",
            "No, because the company knew the meaning the owner attached to 'daily'."
        ],
        ans: 3,
        exp: "(D) is the correct response. When parties attach different meanings to a term, and one party knows (or has reason to know) the meaning attached by the other, while the other does not know the first party's meaning, a contract is formed on the terms understood by the innocent (unaware) party (Restatement § 201)[cite: 6]. The owner didn't know the trade usage, but the company knew the owner expected Sunday cleaning[cite: 6]. Therefore, the owner's meaning controls, and 'daily' includes Sunday[cite: 6]. (A) is incorrect because actual knowledge of the other party's innocent misunderstanding overrides trade usage[cite: 6]. (B) is incorrect because a contract IS formed on the innocent party's terms[cite: 6]. (C) is incorrect because parol evidence is admissible to explain ambiguous terms[cite: 6]."
    },
    {
        id: 14,
        topic: "Breach / Anticipatory Repudiation & Retraction",
        fp: "On May 1, a seller contracted to sell a vineyard to a buyer, closing on July 1. On June 1, the seller repudiated. On June 5, the buyer bought substitute land. On June 10, the seller retracted the repudiation. The buyer did not tender the price on July 1 and sued.",
        q: "Will the buyer prevail?",
        opts: [
            "No, because the buyer's tender on July 1 was a constructive condition.",
            "No, because the seller retracted prior to the time for performance.",
            "Yes, because the seller's repudiation was non-retractable after communication.",
            "Yes, because the buyer bought substitute land prior to the retraction."
        ],
        ans: 3,
        exp: "(D) is the correct response. An anticipatory repudiation can be retracted until the aggrieved party: (1) cancels, (2) materially changes position in reliance, or (3) states the repudiation is final[cite: 6]. The buyer materially changed position by buying substitute land on June 5. This terminated the seller's power to retract[cite: 6]. The June 10 retraction was ineffective. The buyer's duty to tender payment on July 1 was excused by the unretracted repudiation[cite: 6]. (A) is incorrect because the repudiation excused the condition of tender[cite: 6]. (B) is incorrect because the right to retract ended on June 5[cite: 6]. (C) is incorrect because a repudiation is retractable until reliance or cancellation occurs[cite: 6]."
    },
    {
        id: 15,
        topic: "Remedies / Consequential Damages",
        fp: "A painter contracted to remodel an office for $10,000, payable June 1. Relying on this, the painter contracted to buy a truck for '$10,000 cash on June 1, or $12,000 thereafter.' The painter finished the remodel, but the owner unjustifiably refused to pay. The painter suffered a minor ulcer due to stress ($1,000 medical bills). The value of the remodel was $13,000.",
        q: "What is the painter's measure of recovery?",
        opts: [
            "$11,000, the price plus medical bills.",
            "$13,000, the value conferred on the owner.",
            "$10,000, the contract price.",
            "$12,000, the price plus the lost truck discount."
        ],
        ans: 2,
        exp: "(C) is the correct response. The painter is entitled to expectation damages: the contract price of $10,000. Consequential damages are only recoverable if they were reasonably foreseeable to the breaching party at the time of contracting (Hadley v. Baxendale)[cite: 6]. A physical ulcer is not a foreseeable result of a breached commercial contract[cite: 6]. The lost $2,000 discount on the truck is also unforeseeable because the owner did not know the painter needed the funds specifically on June 1 to secure a discount[cite: 6]. Therefore, neither consequential damage is recoverable[cite: 6]. (A) and (D) are incorrect because the damages were unforeseeable[cite: 6]. (B) is incorrect because a fully performing plaintiff seeking a liquidated debt is limited to the contract price, not restitution[cite: 6]."
    },
    {
        id: 16,
        topic: "Defenses / Fraudulent Misrepresentation",
        fp: "A boat dealer sold a vintage boat to a buyer. The dealer said: 'It's a fine vessel, fully inspected. Have your mechanic check it.' The boat had actually sunk previously, and the dealer had concealed the water damage. The buyer declined the inspection. After paying, the buyer discovered the history and sued to rescind.",
        q: "Is the buyer likely to succeed?",
        opts: [
            "No, because the dealer did not affirmatively state it had not sunk.",
            "No, because the buyer declined the mechanic's inspection.",
            "Yes, because the dealer intentionally concealed evidence of the sinking.",
            "Yes, because the contract was unconscionable."
        ],
        ans: 2,
        exp: "(C) is the correct response. A contract is voidable if a party's assent is induced by a fraudulent misrepresentation. While mere non-disclosure is often not fraud, active concealment (repairing/hiding damage) is legally equivalent to an affirmative misrepresentation that the defect does not exist (Restatement § 160)[cite: 6]. The dealer's active concealment was fraud, entitling the buyer to rescind[cite: 6]. (A) is incorrect because active concealment equates to a misstatement[cite: 6]. (B) is incorrect because a victim of fraud does not lose the right to avoid the contract merely by failing to conduct an independent investigation[cite: 6]. (D) is incorrect because unconscionability is a high bar relating to contract terms; fraud is the direct and correct defense here[cite: 6]."
    },
    {
        id: 17,
        topic: "Statute of Frauds / One-Year Rule",
        fp: "On November 15, an employer offered a manager a job at $65,000 a year, stating: 'Accept by showing up on Jan 2. The term is one year from when you start.' The manager showed up January 2. Two weeks later, she was fired without cause and sued. The employer raised the Statute of Frauds.",
        q: "Is the Statute of Frauds an effective defense?",
        opts: [
            "Yes, because the agreement could not be fully performed within a year from when the offer was communicated.",
            "No, because the manager's partial performance removed the defense.",
            "No, because the agreement could be fully performed within a year from the time it was made.",
            "Yes, because the agreement was for more than $50,000."
        ],
        ans: 2,
        exp: "(C) is the correct response. Under the one-year provision of the Statute of Frauds, a contract is unenforceable if it cannot be performed within one year from the *time the contract is made*[cite: 6]. Because this was an offer for a unilateral contract (accepted by showing up), the contract was 'made' on January 2[cite: 6]. A one-year term starting January 2 concludes exactly one year later, meaning it *can* be performed within a year from the day it was made[cite: 6]. Thus, it is outside the Statute of Frauds[cite: 6]. (A) is incorrect because the clock starts at formation, not when the offer is communicated[cite: 6]. (B) is incorrect because partial performance of a service contract does not cure a Statute of Frauds defect[cite: 6]. (D) is incorrect because the dollar amount is irrelevant for service contracts[cite: 6]."
    },
    {
        id: 18,
        topic: "Performance / Condition Precedent Waiver",
        fp: "A buyer contracted to buy land. The contract stated: 'Conditional upon buyer obtaining an 8% loan.' The buyer could only get an 8.5% loan. He decided he wanted the land anyway, and tendered the purchase price at closing. The seller refused to perform, citing the failure of the loan condition. The buyer sued.",
        q: "Will the buyer prevail?",
        opts: [
            "No, because an express condition will only be excused to avoid forfeiture.",
            "Yes, because the 8% loan was a condition for the buyer's benefit, which the buyer waived.",
            "No, because the contract could not be modified without the seller's consent.",
            "Yes, because the buyer detrimentally relied on the promise."
        ],
        ans: 1,
        exp: "(B) is the correct response. When an express condition in a contract is intended solely for the benefit of one party, that party may waive the condition and enforce the contract[cite: 6]. The financing contingency was clearly designed solely to protect the buyer from being forced to buy without an 8% loan[cite: 6]. By tendering the purchase price, the buyer waived the protection of that condition[cite: 6]. The seller cannot use the failure of the buyer's protective condition to escape the contract[cite: 6]. (A) is incorrect because waiver is another valid way to excuse a condition[cite: 6]. (C) is incorrect because this is a waiver of a condition, not a modification of the seller's duties[cite: 6]. (D) is incorrect because reliance is not the operative doctrine here; waiver is[cite: 6]."
    },
    {
        id: 19,
        topic: "Performance / Express Condition Waiver",
        fp: "A buyer agreed to buy a gas engine for $1,000, delivery Feb 1. They orally agreed the contract was effective ONLY if the buyer notified the seller in writing by Jan 2 that he found a sub-buyer. On Dec 16, the buyer called the seller: 'I found a sub-buyer, but my secretary is sick so I can't write.' Seller said: 'That's okay. I'll deliver Feb 1.' The seller later refused to deliver.",
        q: "What concept best supports the buyer's claim for breach?",
        opts: [
            "Waiver of condition.",
            "Substantial performance.",
            "Novation.",
            "Nonoccurrence of a condition subsequent."
        ],
        ans: 0,
        exp: "(A) is the correct response. The written notice by Jan 2 was an express condition precedent to the contract's effectiveness[cite: 6]. However, a party may waive an express condition that is for their benefit[cite: 6]. When the seller said 'That's okay' to the oral notice, the seller explicitly waived the requirement that the notice be in writing[cite: 6]. Because the buyer relied on this waiver, it became binding[cite: 6]. (B) is incorrect because strict compliance, not substantial performance, is required for express conditions, unless waived[cite: 6]. (C) is incorrect because novation involves substituting a new party[cite: 6]. (D) is incorrect because the notice was a condition precedent to effectiveness, not a condition subsequent[cite: 6]."
    },
    {
        id: 20,
        topic: "Formation / Express Condition of Acceptance",
        fp: "A distributor agreement stated a retailer's orders would be binding 'only when expressly accepted by the distributor.' For two years, the distributor filled all orders. In year three, a pricing dispute arose. The retailer submitted an order. The distributor refused to fill it. The retailer sued.",
        q: "Will the retailer prevail?",
        opts: [
            "No, because the retailer's practice excused the refusal.",
            "Yes, because the pricing dispute is independent of the obligation to fill orders.",
            "Yes, because course of dealing binds the distributor to fill it.",
            "No, because the distributor never expressly accepted the order."
        ],
        ans: 3,
        exp: "(D) is the correct response. Under UCC § 2-206, an offer invites acceptance in any reasonable manner *unless otherwise unambiguously indicated*[cite: 6]. The master agreement unambiguously stated that orders (offers) were binding *only* upon express acceptance[cite: 6]. Because the distributor did not expressly accept the new order, no contract for that specific order was formed[cite: 6]. (A) is incorrect because the refusal is justified by the lack of acceptance, not the pricing dispute[cite: 6]. (B) is incorrect because there was no obligation to fill the order[cite: 6]. (C) is incorrect because under UCC § 1-303, express terms trump course of dealing; the express term requiring 'express acceptance' overrides the prior history of filling orders[cite: 6]."
    },
    {
        id: 21,
        topic: "Parol Evidence / Total Integration",
        fp: "A buyer orally agreed to buy an A/C system for $100,000. They signed a lengthy form contract setting the price at $110,000. It had no merger clause. The seller delivered it, but the buyer refused to pay more than $100,000, citing the oral agreement. The seller sued for $10,000.",
        q: "Is the court likely to admit evidence of the $100,000 oral agreement?",
        opts: [
            "Yes, because the oral term is relevant to reformation.",
            "No, because the buyer assumed the risk of mistake.",
            "No, because the oral term would contradict an express term in the written agreement.",
            "Yes, because there was no merger clause."
        ],
        ans: 2,
        exp: "(C) is the correct response. Under the Parol Evidence Rule (UCC § 2-202), a written agreement intended as a final expression of the parties' agreement regarding specific terms cannot be contradicted by evidence of any prior agreement[cite: 6]. Even if a writing is only a *partial* integration (lacking a merger clause), it still cannot be *contradicted* by prior oral agreements (though it could be supplemented by consistent additional terms)[cite: 6]. The $100,000 oral price directly contradicts the $110,000 written price[cite: 6]. Therefore, the evidence is barred[cite: 6]. (A) is incorrect because there is no evidence of a clerical scrivener's error justifying reformation[cite: 6]. (B) is incorrect because the issue is the Parol Evidence Rule, not assumption of risk[cite: 6]. (D) is incorrect because even without a merger clause, contradictory terms are barred[cite: 6]."
    },
    {
        id: 22,
        topic: "Remedies / Incidental & Consequential Damages",
        fp: "A mill contracted to buy all its logs from a company. The company failed to deliver 10%. The mill paid an attorney $2,000 for advice on enforcing the contract. It paid a broker $5,000 to find replacement logs. It paid $25,000 to transport the replacement logs. It suffered $200,000 in lost profits. The mill sued.",
        q: "How much should the court award?",
        opts: [
            "$205,000.",
            "$225,000.",
            "$232,000.",
            "$230,000."
        ],
        ans: 3,
        exp: "(D) is the correct response. Under UCC § 2-715, a buyer can recover consequential damages (e.g., lost profits) and incidental damages (expenses reasonably incurred in effecting cover, such as broker fees and transportation)[cite: 6]. However, under the American Rule, attorney's fees are not recoverable as damages for breach of contract unless specified in the contract or by a specific statute[cite: 6]. Therefore, the mill recovers $200,000 (lost profits) + $5,000 (broker) + $25,000 (transport) = $230,000[cite: 6]. The $2,000 attorney fee is excluded[cite: 6]. (A) excludes the transport[cite: 6]. (B) excludes the broker and transport[cite: 6]. (C) improperly includes the attorney's fees[cite: 6]."
    },
    {
        id: 23,
        topic: "Formation / UCC 2-207 Additional Term Material Alteration",
        fp: "A buyer mailed an order: 'Ship 100 boxes of screws at $3.' The seller mailed an acknowledgment: 'Disputes regarding quality shall be arbitrated.' The buyer didn't reply. The seller shipped the screws. The buyer found them defective and sued for breach of warranty. The seller claimed arbitration was required.",
        q: "What is the status of the arbitration clause?",
        opts: [
            "It was formed by conduct, so the court would exclude the arbitration provision.",
            "A contract formed on acknowledgment, and the court must decide if the arbitration term materially alters the contract.",
            "The acknowledgment was a counteroffer the buyer never accepted.",
            "A contract formed on acknowledgment, and the term automatically became part of the contract."
        ],
        ans: 1,
        exp: "(B) is the correct response. Under UCC § 2-207(1), a definite and seasonable expression of acceptance operates as an acceptance even if it states additional terms[cite: 6]. Thus, a contract was formed when the acknowledgment was mailed[cite: 6]. Under § 2-207(2), between merchants, additional terms become part of the contract UNLESS they materially alter it[cite: 6]. Therefore, the court must perform a factual analysis to decide if an arbitration clause materially alters this specific contract (many courts hold that it does)[cite: 6]. (A) is incorrect because a contract was formed by the writings under § 2-207(1), not merely by conduct under § 2-207(3)[cite: 6]. (C) is incorrect because the UCC abolished the mirror image rule; the acknowledgment was an acceptance[cite: 6]. (D) is incorrect because material alterations do not automatically enter the contract[cite: 6]."
    },
    {
        id: 24,
        topic: "Defenses / Incapacity (Intoxication)",
        fp: "A woman took heavy pain medication after surgery. She offered to sell her $3,000 boat to her neighbor for $450. The neighbor knew the boat's value and knew she was 'out of it' from medication. He accepted. The next day, the woman's son demanded the neighbor pay $3,450. The neighbor tendered $450, and the woman refused. The neighbor sued.",
        q: "Will the neighbor prevail?",
        opts: [
            "Yes, because the offer and acceptance created a contract.",
            "No, because the contract was voidable due to the woman's apparent incapacity.",
            "No, because the woman put nothing in writing.",
            "Yes, because his reliance made it enforceable."
        ],
        ans: 1,
        exp: "(B) is the correct response. A person incurs only voidable contractual duties if, by reason of mental illness or defect (including severe medication/intoxication), they are unable to act in a reasonable manner in relation to the transaction and the other party has reason to know of their condition (Restatement § 15)[cite: 6]. The woman was severely impaired, offered the boat at an 85% discount, and the neighbor explicitly recognized she was 'out of it.' Therefore, the contract is voidable by the woman[cite: 6]. (A) is incorrect because although offer and acceptance occurred, the resulting contract was voidable[cite: 6]. (C) is incorrect because the sale of goods under $500 ($450) does not require a writing under the Statute of Frauds[cite: 6]. (D) is incorrect because reliance does not cure a lack of contractual capacity[cite: 6]."
    },
    {
        id: 25,
        topic: "Performance / Installment Contracts & Perfect Tender",
        fp: "A wholesaler contracted to sell a bakery 10,000 pounds of sugar each week for 10 weeks, delivery Mondays. On Week 2, the wholesaler delivered only 3,000 pounds, promising the rest by Wednesday. The bakery did all its baking on Tuesdays. The bakery rejected the 3,000 pounds.",
        q: "Was the bakery legally justified in rejecting the tender?",
        opts: [
            "No, because it was not a substantial impairment of the entire contract, and the wholesaler offered cure.",
            "Yes, because the bakery was entitled to reject any tender that did not perfectly conform.",
            "No, because accepting Week 1 waived the condition of perfect tender.",
            "Yes, because the tender was a substantial impairment of that installment and could not be cured."
        ],
        ans: 3,
        exp: "(D) is the correct response. Under UCC § 2-612(2), a buyer may reject a non-conforming installment if the non-conformity substantially impairs the value of *that installment* and cannot be cured[cite: 6]. Because the bakery baked on Tuesdays, a delivery on Wednesday could not cure the 7,000-pound shortfall for that week's baking[cite: 6]. Therefore, the 70% shortfall substantially impaired the value of the Week 2 installment and was incurable, justifying rejection[cite: 6]. (A) is incorrect because rejection of a *single installment* only requires substantial impairment of that installment, not the whole contract[cite: 6]. (B) is incorrect because the perfect tender rule (UCC § 2-601) does not apply to installment contracts[cite: 6]. (C) is incorrect because accepting a conforming Week 1 delivery does not waive the right to reject a non-conforming Week 2 delivery[cite: 6]."
    }
];