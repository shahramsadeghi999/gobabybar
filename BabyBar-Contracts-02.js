const examData = [
    {
        id: 1,
        topic: "Formation / Battle of the Forms (UCC § 2-207)",
        fp: "Merchant A emails a purchase order to Merchant B for 1,000 widgets at $5 each. Merchant B sends an acknowledgment form accepting the order but adds a clause requiring arbitration of all disputes. Merchant A receives the form and says nothing. B ships the widgets, A accepts and uses them. Later, a dispute arises over the widget quality. A sues in state court. B moves to compel arbitration.",
        q: "Does the arbitration clause become part of the contract under UCC § 2-207?",
        opts: [
            "No, because between merchants, additional terms completely void the initial offer and operate exclusively as an independent counteroffer.",
            "Yes, because under the mirror image rule, taking possession of the goods constitutes absolute acceptance of all counteroffer terms.",
            "No, because an arbitration clause is generally considered a material alteration to the contract that does not automatically become part of the agreement.",
            "Yes, because Merchant A failed to object to the additional term within ten days of receiving the written acknowledgment form."
        ],
        ans: 2,
        exp: "Under UCC § 2-207(2), between merchants, additional terms automatically become part of the contract UNLESS: (a) the offer expressly limits acceptance to its terms, (b) they materially alter it, or (c) notification of objection is given. Courts universally hold that adding an arbitration clause is a 'material alteration,' so it does not enter the contract without express assent."
    },
    {
        id: 2,
        topic: "Formation / UCC § 2-207 (Express Limits)",
        fp: "Merchant A emails a purchase order to Merchant B for 1,000 widgets at $5 each. Merchant B sends an acknowledgment form accepting the order but adds a clause requiring arbitration of all disputes. Merchant A receives the form and says nothing. B ships the widgets, A accepts and uses them.\n\nSuppose instead the original offer from Merchant A expressly stated: 'Acceptance is strictly limited to the terms of this offer.' B's acknowledgment included the arbitration clause, and B shipped the goods. A accepted the goods.",
        q: "Are the parties bound by the arbitration clause in this alternate scenario?",
        opts: [
            "Yes, because the physical receipt and utilization of the goods strictly waives any limiting language contained in the initial purchase order.",
            "No, because when the offer expressly limits acceptance to its terms, any additional terms proposed in the acceptance automatically fail to become part of the contract.",
            "Yes, because UCC gap-fillers mandate commercial arbitration for all transactions involving merchants.",
            "No, because contracts formed by conduct entirely exclude all written documentation exchanged prior to the shipment."
        ],
        ans: 1,
        exp: "Under UCC § 2-207(2)(a), if an offer expressly limits acceptance to the terms of the offer, any additional terms proposed by the offeree in their acceptance automatically do NOT become part of the contract, even between merchants."
    },
    {
        id: 3,
        topic: "Formation / Mirror Image Rule (Common Law)",
        fp: "Merchant A emails a purchase order to Merchant B for 1,000 widgets at $5 each. Merchant B sends an acknowledgment form accepting the order but adds a clause requiring arbitration of all disputes. Merchant A receives the form and says nothing. B ships the widgets, A accepts and uses them.",
        q: "Assume the transaction involved a contract for real estate instead of widgets. Under the common law, what is the legal effect of B's acknowledgment adding an arbitration clause?",
        opts: [
            "It binds the parties to the arbitration clause if no objection is made.",
            "It creates an option contract.",
            "It acts as a binding acceptance.",
            "It acts as a rejection and counteroffer under the mirror image rule."
        ],
        ans: 3,
        exp: "Real estate contracts are governed by the common law, not the UCC. The common law follows the 'mirror image rule,' which dictates that an acceptance must precisely match the terms of the offer. Any addition or alteration of terms (like adding an arbitration clause) acts as a rejection of the original offer and constitutes a new counteroffer."
    },
    {
        id: 4,
        topic: "Defenses / Mutual Mistake",
        fp: "Buyer and Seller sign a contract for the sale of a specific painting for $10,000. Both genuinely believe the painting is an authentic original by a famous artist. After the sale, a certified appraiser reveals the painting is a clever forgery worth only $100.",
        q: "Can Buyer void the contract?",
        opts: [
            "No, because courts do not inquire into the adequacy of consideration.",
            "Yes, because there was a mutual mistake regarding a basic assumption on which the contract was made that materially affects the agreed exchange of performances.",
            "Yes, because the seller committed actionable fraud against the buyer.",
            "No, because the buyer bore the risk of the mistake by failing to hire an appraiser before the sale."
        ],
        ans: 1,
        exp: "A contract is voidable by the adversely affected party if there is a mutual mistake about a basic assumption of the contract that has a material effect on the agreed exchange, provided the adversely affected party did not bear the risk of the mistake. Authenticity of art is a basic assumption, making the contract voidable."
    },
    {
        id: 5,
        topic: "Defenses / Unilateral Mistake",
        fp: "Buyer and Seller sign a contract for the sale of a specific painting for $10,000. Both genuinely believe the painting is an authentic original by a famous artist. After the sale, a certified appraiser reveals the painting is a clever forgery worth only $100.\n\nSuppose instead that Seller knew the painting was a fake, but Buyer erroneously believed it was real. Buyer did not ask any questions, and Seller made no statements about its authenticity.",
        q: "Can Buyer void the contract under the doctrine of mistake?",
        opts: [
            "Yes, because even though it was a unilateral mistake, the seller knew of the buyer's mistake and intentionally failed to correct a basic assumption that materially affected the exchange.",
            "No, because unilateral mistakes never provide grounds for rescission under any circumstances in modern contract jurisprudence.",
            "No, because the buyer failed to conduct a reasonable due diligence investigation prior to executing the purchase agreement.",
            "Yes, because the legal doctrine of caveat emptor has been fully abolished across all commercial and private sales transactions."
        ],
        ans: 0,
        exp: "A unilateral mistake generally does not render a contract voidable. However, an exception exists if the non-mistaken party KNEW or had reason to know of the mistake. Because the Seller knew the Buyer was mistaken about a basic assumption (authenticity), the Buyer can void the contract."
    },
    {
        id: 6,
        topic: "Formation / Promissory Estoppel",
        fp: "Uncle tells his Nephew, 'If you go to college, I will pay your tuition.' Nephew, relying on this promise, quits his full-time job and enrolls in a university. Uncle refuses to pay, claiming there was no contract because he received no benefit.",
        q: "Is Uncle's promise enforceable?",
        opts: [
            "No, because it was a mere gratuitous gift.",
            "Yes, under the doctrine of promissory estoppel, because Nephew foreseeably and detrimentally relied on the promise.",
            "Yes, because family relationships inherently substitute for consideration.",
            "No, because the Statute of Frauds requires it to be in writing."
        ],
        ans: 1,
        exp: "A promise that lacks consideration is still enforceable under the doctrine of promissory estoppel if the promisor should reasonably expect the promise to induce action or forbearance, the promisee does in fact reasonably and detrimentally rely on it, and injustice can only be avoided by enforcement. Nephew quitting his job and enrolling satisfies this test."
    },
    {
        id: 7,
        topic: "Remedies / Promissory Estoppel Damages",
        fp: "Uncle tells his Nephew, 'If you go to college, I will pay your tuition.' Nephew, relying on this promise, quits his full-time job and enrolls in a university. Uncle refuses to pay, claiming there was no contract because he received no benefit.",
        q: "If the court enforces the promise using promissory estoppel, what is the most likely basis for awarding damages?",
        opts: [
            "Reliance damages, to compensate Nephew for the economic detriment suffered by quitting his job and enrolling, limited as justice requires.",
            "Restitution, for the value of the uncle's subjective benefit.",
            "Specific performance of the full college tuition.",
            "Punitive damages for the uncle's bad faith breach of a familial duty."
        ],
        ans: 0,
        exp: "When a contract is enforced via promissory estoppel, courts typically have the discretion to limit the remedy 'as justice requires.' Often, courts will award reliance damages (out-of-pocket costs and lost wages) to restore the promisee to their original position, rather than full expectation damages."
    },
    {
        id: 8,
        topic: "Terms / Parol Evidence Rule",
        fp: "Retailer sells a commercial oven to Baker under a fully integrated written contract. The contract contains a conspicuous disclaimer stating: 'SELLER DISCLAIMS ALL IMPLIED WARRANTIES, INCLUDING MERCHANTABILITY.' During negotiations, Retailer orally promised Baker that the oven would reach 500 degrees within ten minutes. The written contract does not mention heating times. The oven works fine but takes 30 minutes to reach 500 degrees.",
        q: "Can Baker introduce evidence of Retailer's oral promise regarding the heating time to prove a breach of express warranty?",
        opts: [
            "Yes, because express warranties can never be disclaimed by a written contract under any circumstances.",
            "No, because the statute of frauds prevents oral testimony from altering the sale of goods over $500.",
            "Yes, because the oral statement directly contradicts the implied warranty of merchantability.",
            "No, because the Parol Evidence Rule bars evidence of prior oral agreements that add to or contradict a completely integrated written contract."
        ],
        ans: 3,
        exp: "The Parol Evidence Rule prevents a party from introducing evidence of prior or contemporaneous oral agreements to contradict or supplement a 'completely integrated' written contract. Because the written contract was fully integrated, the prior oral promise about heating times is inadmissible."
    },
    {
        id: 9,
        topic: "Terms / Disclaimer of Implied Warranties",
        fp: "Retailer sells a commercial oven to Baker under a fully integrated written contract. The contract contains a conspicuous disclaimer stating: 'SELLER DISCLAIMS ALL IMPLIED WARRANTIES, INCLUDING MERCHANTABILITY.' During negotiations, Retailer orally promised Baker that the oven would reach 500 degrees within ten minutes. The written contract does not mention heating times. The oven works fine but takes 30 minutes to reach 500 degrees.",
        q: "Assuming the disclaimer of merchantability was valid, what must the disclaimer contain to be effective under the UCC?",
        opts: [
            "The word 'merchantability', and it must be conspicuous if in writing.",
            "A signature from both parties acknowledging the exact risk.",
            "Specific language referencing the exact goods being sold.",
            "A notarized seal of approval from a commercial arbiter."
        ],
        ans: 0,
        exp: "Under UCC § 2-316, to exclude or modify the implied warranty of merchantability, the language must specifically mention the word 'merchantability.' Furthermore, if the disclaimer is in writing, it MUST be conspicuous (e.g., larger font, bold, or all caps)."
    },
    {
        id: 10,
        topic: "Terms / Implied Warranty of Merchantability",
        fp: "Retailer sells a commercial oven to Baker under a fully integrated written contract. The contract contains a conspicuous disclaimer stating: 'SELLER DISCLAIMS ALL IMPLIED WARRANTIES, INCLUDING MERCHANTABILITY.' During negotiations, Retailer orally promised Baker that the oven would reach 500 degrees within ten minutes. The written contract does not mention heating times. The oven works fine but takes 30 minutes to reach 500 degrees.",
        q: "Suppose the contract did NOT have a disclaimer. Would the implied warranty of merchantability apply to the oven sale?",
        opts: [
            "Yes, because Retailer is a merchant who deals in goods of that kind.",
            "No, because Baker is a merchant and should have inspected the oven.",
            "No, because implied warranties only apply to consumer goods, not commercial equipment.",
            "Yes, because all sales of goods inherently carry an absolute warranty of perfection."
        ],
        ans: 0,
        exp: "Under UCC § 2-314, a warranty that the goods shall be merchantable is implied in a contract for their sale if the seller is a merchant with respect to goods of that kind. Retailer sells commercial ovens, so the implied warranty automatically applies unless properly disclaimed."
    },
    {
        id: 11,
        topic: "Performance / Perfect Tender Rule",
        fp: "On May 1, Buyer contracts to buy 100 blue shirts from Seller for delivery on May 15. On May 10, Seller delivers 100 red shirts. Buyer immediately rejects the shipment and notifies Seller.",
        q: "Under the UCC, was Buyer legally entitled to reject the red shirts?",
        opts: [
            "No, because color is a minor non-material defect.",
            "No, because Buyer must give Seller 30 days to fix the issue.",
            "Yes, but only if Buyer proves actual financial damages.",
            "Yes, under the perfect tender rule, Buyer can reject goods that fail in any respect to conform to the contract."
        ],
        ans: 3,
        exp: "Under the UCC's Perfect Tender Rule (§ 2-601), if the goods or the tender of delivery fail in ANY respect to conform to the contract, the buyer may reject the whole, accept the whole, or accept any commercial unit or units and reject the rest. Red shirts are non-conforming, allowing immediate rejection."
    },
    {
        id: 12,
        topic: "Performance / Right to Cure",
        fp: "On May 1, Buyer contracts to buy 100 blue shirts from Seller for delivery on May 15. On May 10, Seller delivers 100 red shirts. Buyer immediately rejects the shipment and notifies Seller.",
        q: "After Buyer's rejection on May 10, does Seller have the right to fix the mistake?",
        opts: [
            "No, the perfect tender rule allows Buyer to cancel the contract immediately upon any non-conformity.",
            "Yes, because the time for performance (May 15) has not yet expired, Seller has an absolute right to seasonably notify the buyer of an intention to cure and deliver conforming goods.",
            "Yes, but only if the buyer grants explicit written permission to attempt a second delivery.",
            "No, because shipping the wrong goods is an automatic anticipatory repudiation."
        ],
        ans: 1,
        exp: "Under UCC § 2-508, if a buyer rejects non-conforming goods and the time for performance has NOT yet expired, the seller may seasonably notify the buyer of their intention to cure and may then make a conforming delivery within the contract time (by May 15)."
    },
    {
        id: 13,
        topic: "Performance / Installment Contracts",
        fp: "On May 1, Buyer contracts to buy 100 blue shirts from Seller for delivery on May 15. On May 10, Seller delivers 100 red shirts. Buyer immediately rejects the shipment and notifies Seller.\n\nAssume instead this was an installment contract calling for 10 monthly deliveries of 10 shirts each. The first delivery was red shirts instead of blue.",
        q: "Under UCC rules for installment contracts, can Buyer cancel the entire contract based on this first non-conforming delivery?",
        opts: [
            "Yes, because the perfect tender rule strictly applies equally to all UCC contracts regardless of installment structures.",
            "No, because buyers must accept all non-conforming installments and seek monetary damages exclusively.",
            "No, under an installment contract, a buyer can only reject an installment if the non-conformity substantially impairs the value of that installment and cannot be cured; the entire contract is only breached if the non-conformity substantially impairs the value of the whole contract.",
            "Yes, because the first installment establishes the binding precedent for all subsequent contractual deliveries."
        ],
        ans: 2,
        exp: "The Perfect Tender Rule does NOT apply to installment contracts. Under UCC § 2-612, a buyer can only reject a non-conforming installment if it 'substantially impairs' the value of that installment and cannot be cured. The buyer can only cancel the ENTIRE contract if the non-conformity 'substantially impairs the value of the whole contract.'"
    },
    {
        id: 14,
        topic: "Remedies / Liquidated Damages",
        fp: "Landlord leases a storefront to Tenant for 5 years at $5,000/month. The lease contains a clause stating: 'If Tenant breaches and abandons the property, Tenant must pay a penalty of $500,000 immediately.' Tenant abandons the property after 1 year. Landlord sues for $500,000 but makes no effort to find a new tenant.",
        q: "Is the $500,000 clause enforceable?",
        opts: [
            "Yes, because both commercial parties freely agreed to the terms at the time of contract formation.",
            "No, because it is an invalid penalty clause; liquidated damages must be a reasonable estimate of difficult-to-calculate actual damages.",
            "Yes, because real estate leases are exempt from traditional common law damages restrictions.",
            "No, because it was not explicitly approved by a judicial officer prior to the breach."
        ],
        ans: 1,
        exp: "Liquidated damages clauses are only enforceable if damages were difficult to estimate at the time of contract formation AND the amount agreed upon was a reasonable forecast of compensatory damages. Clauses designed to punish the breaching party (expressly labeled 'penalty' and grossly disproportionate to actual harm) are void and unenforceable as against public policy."
    },
    {
        id: 15,
        topic: "Remedies / Mitigation of Damages",
        fp: "Landlord leases a storefront to Tenant for 5 years at $5,000/month. The lease contains a clause stating: 'If Tenant breaches and abandons the property, Tenant must pay a penalty of $500,000 immediately.' Tenant abandons the property after 1 year. Landlord sues for $500,000 but makes no effort to find a new tenant.",
        q: "Under modern law, what effect does Landlord's failure to look for a new tenant have?",
        opts: [
            "It constitutes a total waiver of all contractual damages.",
            "It triggers an automatic countersuit for unjust enrichment.",
            "Landlord's recoverable damages will be reduced by the amount he could have reasonably avoided by mitigating damages.",
            "It has absolutely no effect, as landlords have no duty to mitigate."
        ],
        ans: 2,
        exp: "Under modern contract law, the non-breaching party has a duty to mitigate their damages. If the Landlord fails to make reasonable efforts to re-let the abandoned property, the court will subtract the amount of rent the landlord *could have* collected from a replacement tenant from the total damages awarded."
    },
    {
        id: 16,
        topic: "Third Parties / Assignment of Rights",
        fp: "Homeowner contracts with Roofer to repair her roof for $10,000, payable upon completion. The contract states, 'This contract may not be assigned.' Halfway through the job, Roofer assigns his right to receive the $10,000 payment to Bank to secure a loan. Roofer finishes the job. Bank demands payment from Homeowner, but Homeowner refuses, citing the anti-assignment clause.",
        q: "Is the assignment of the right to receive payment valid despite the clause?",
        opts: [
            "No, because the contract explicitly prohibited assignments.",
            "No, because personal service contracts cannot be assigned.",
            "Yes, because assignments are mandatory under federal banking laws.",
            "Yes, because an anti-assignment clause generally only destroys the right to assign, not the power to assign, and assignments of the right to receive money are strongly favored in commerce."
        ],
        ans: 3,
        exp: "A general clause stating 'this contract may not be assigned' is construed as merely a promise not to assign. While assigning it is technically a breach of that promise, the assignment itself remains valid and enforceable (destroying the 'right' to assign, but not the 'power' to do so). Furthermore, the right to receive money is almost always freely assignable."
    },
    {
        id: 17,
        topic: "Third Parties / Voiding Assignments",
        fp: "Homeowner contracts with Roofer to repair her roof for $10,000, payable upon completion. The contract states, 'This contract may not be assigned.' Halfway through the job, Roofer assigns his right to receive the $10,000 payment to Bank to secure a loan. Roofer finishes the job. Bank demands payment from Homeowner, but Homeowner refuses, citing the anti-assignment clause.\n\nIf the clause instead stated, 'Any assignment of this contract is completely VOID,' how would this affect the Bank's rights?",
        q: "What effect does the specific word 'VOID' have on the assignment?",
        opts: [
            "The assignment would likely be invalid, as explicit language declaring assignments 'void' effectively destroys the power to assign the contract rights.",
            "It would have no effect, because all anti-assignment clauses are unconstitutional.",
            "The bank could still collect the funds, but the homeowner could sue the bank for breach of contract.",
            "The assignment would only be void if the roofer failed to complete the roof repairs prior to the banking transfer."
        ],
        ans: 0,
        exp: "If a contract clause explicitly states that any assignment is 'void' or 'invalid,' courts will enforce it strictly. Such language destroys the actual 'power' to assign, meaning any attempted assignment is legally ineffective and the assignee (Bank) acquires no rights."
    },
    {
        id: 18,
        topic: "Third Parties / Delegation of Duties",
        fp: "Homeowner contracts with Roofer to repair her roof for $10,000, payable upon completion. The contract states, 'This contract may not be assigned.' Halfway through the job, Roofer assigns his right to receive the $10,000 payment to Bank to secure a loan. Roofer finishes the job. Bank demands payment from Homeowner, but Homeowner refuses, citing the anti-assignment clause.",
        q: "Suppose instead that Roofer tried to delegate the duty to repair the roof to another contractor. Is this delegation valid without Homeowner's consent?",
        opts: [
            "No, because all delegations must be executed in writing.",
            "Yes, unless the contract prohibits delegation or the obligee has a substantial interest in having the specific individual perform.",
            "Yes, because delegation completely relieves the original obligor of all liability.",
            "No, because duties involving manual labor cannot be delegated."
        ],
        ans: 1,
        exp: "Duties are generally delegable without the obligee's consent unless: (1) the contract expressly prohibits delegation, or (2) the duties involve specialized personal skill, judgment, or trust, such that the obligee has a substantial interest in having the specific person perform. Standard roof repair is usually delegable, though Roofer remains secondarily liable if the delegate breaches."
    },
    {
        id: 19,
        topic: "Performance / Substantial Performance",
        fp: "Builder contracts to build a house for Buyer according to highly specific architectural plans, which specify 'Reading brand copper pipes.' Builder accidentally uses 'Cohoes brand copper pipes,' which are identical in quality, price, and durability. Buyer discovers this before making the final $50,000 payment, refuses to pay, and demands the walls be torn down to replace the pipes.",
        q: "Under the common law doctrine of substantial performance, is Builder entitled to the final payment?",
        opts: [
            "No, because any deviation from the exact specifications constitutes a material breach that completely excuses the buyer's duty to pay.",
            "No, because the perfect tender rule applies to the installation of plumbing fixtures.",
            "Yes, because Builder's breach was immaterial and he substantially performed, though Buyer may deduct the difference in value (which is zero here).",
            "Yes, but only if the Builder agrees to replace the pipes at a later date."
        ],
        ans: 2,
        exp: "Under common law, if a party substantially performs their contractual obligations and the breach is immaterial (innocent mistake, no loss of value), the other party's duty to pay is triggered. The buyer must pay the contract price but may deduct the cost of the defect (diminution in value), which is zero for identical pipes. (This is the classic Jacob & Youngs v. Kent scenario)."
    },
    {
        id: 20,
        topic: "Performance / Express Conditions",
        fp: "Builder contracts to build a house for Buyer according to highly specific architectural plans, which specify 'Reading brand copper pipes.' Builder accidentally uses 'Cohoes brand copper pipes,' which are identical in quality, price, and durability. Buyer discovers this before making the final $50,000 payment, refuses to pay, and demands the walls be torn down to replace the pipes.",
        q: "If the contract explicitly stated, 'It is an EXPRESS CONDITION PRECEDENT to Buyer's duty to pay that ONLY Reading brand pipes are used,' how would the court likely rule?",
        opts: [
            "The court would ignore the express condition because it is unconscionable.",
            "The court would still require payment under the doctrine of quantum meruit for the full contract price.",
            "Builder would definitely receive the final payment, as express conditions are functionally identical to constructive conditions in construction contracts.",
            "Express conditions require strict compliance; therefore, failing to use the required pipes means the condition was not met, potentially excusing Buyer's duty to pay, though courts often seek to avoid such harsh forfeitures if the breach was entirely innocent."
        ],
        ans: 3,
        exp: "Unlike constructive conditions (which are satisfied by substantial performance), express conditions (using magic words like 'expressly conditioned on') require strict, 100% literal compliance. Failure to strictly comply excuses the other party's performance. However, modern courts will sometimes excuse an express condition to prevent a grossly disproportionate forfeiture if the breach was minor and innocent."
    },
    {
        id: 21,
        topic: "Performance / Impracticability",
        fp: "Event Planner rents a specialized outdoor concert pavilion from Owner for a specific date to host a famous singer. Two days before the concert, a massive, unpredicted hurricane entirely destroys the pavilion. Event Planner demands a refund of her deposit, and Owner sues for the remaining rental balance.",
        q: "What is Event Planner's best defense against Owner's suit for the balance?",
        opts: [
            "Impossibility / Impracticability, because the specific subject matter necessary for performance was destroyed without fault.",
            "Mutual mistake, because they assumed the weather would be fine.",
            "Statute of Frauds, because the pavilion was real estate.",
            "Promissory estoppel, because she relied on the venue."
        ],
        ans: 0,
        exp: "Performance is excused under the doctrine of impossibility (or impracticability) when the specific subject matter of the contract (the specialized pavilion) is destroyed through no fault of either party prior to performance."
    },
    {
        id: 22,
        topic: "Performance / Frustration of Purpose",
        fp: "Event Planner rents a specialized outdoor concert pavilion from Owner for a specific date to host a famous singer. Two days before the concert, a massive, unpredicted hurricane entirely destroys the pavilion. Event Planner demands a refund of her deposit, and Owner sues for the remaining rental balance.\n\nSuppose the pavilion was NOT destroyed, but the famous singer tragically died the day before the concert. Event Planner cancels the event.",
        q: "Does the doctrine of frustration of purpose excuse Event Planner's duty to pay the rental fee?",
        opts: [
            "No, because the physical venue was still fully available for use.",
            "Yes, because the principal purpose of the contract was substantially frustrated by an unforeseeable event, and both parties understood this purpose.",
            "No, because the Event Planner bore the absolute risk of the performer's mortality.",
            "Yes, but only if the rental agreement contained a specific force majeure clause referencing death."
        ],
        ans: 1,
        exp: "Frustration of purpose excuses performance when a supervening, unforeseeable event fundamentally destroys the mutually understood, core purpose of the contract, even if performance is still technically possible. If both parties knew the pavilion was rented solely for that specific singer, the singer's death frustrates the entire purpose of the rental."
    },
    {
        id: 23,
        topic: "Performance / Risk of Loss (UCC)",
        fp: "Event Planner rents a specialized outdoor concert pavilion from Owner for a specific date to host a famous singer. Two days before the concert, a massive, unpredicted hurricane entirely destroys the pavilion. Event Planner demands a refund of her deposit, and Owner sues for the remaining rental balance.\n\nAssume instead this was a UCC contract where a manufacturer shipped 100 guitars to a retailer 'FOB Seller's Plant.' The shipping truck is destroyed by the hurricane in transit.",
        q: "Who bears the risk of loss?",
        opts: [
            "The manufacturer, because they retained legal title until the goods reached the retailer's physical storefront.",
            "The shipping company, because carriers are held strictly liable for all acts of God under the Uniform Commercial Code.",
            "The retailer (Buyer), because in a shipment contract (FOB Seller's Plant), the risk of loss passes to the buyer once the seller properly delivers the goods to the carrier.",
            "The risk of loss is split equally between the buyer and the seller under the doctrine of comparative commercial fault."
        ],
        ans: 2,
        exp: "Under UCC § 2-509, in a shipment contract (designated as 'FOB Seller's place of business'), the risk of loss passes to the buyer as soon as the seller duly delivers the goods to the common carrier. Because the hurricane destroyed the truck in transit, the Buyer bears the risk and must pay for the ruined guitars."
    },
    {
        id: 24,
        topic: "Performance / Anticipatory Repudiation",
        fp: "Seller agrees in writing to sell his unique historic mansion to Buyer for $1,000,000. Closing is set for December 1. On November 1, Seller calls Buyer and states, 'I cannot bear to sell the house, the deal is off.' Buyer immediately finds another house but really wants the mansion.",
        q: "What is the legal effect of Seller's phone call?",
        opts: [
            "It is a minor breach requiring a 30-day cure period.",
            "It is a mutual rescission.",
            "It is an invalid oral modification.",
            "It is an anticipatory repudiation, allowing Buyer to sue immediately for total breach."
        ],
        ans: 3,
        exp: "An anticipatory repudiation occurs when one party unequivocally communicates that they will not perform their contractual duties before the time of performance arrives. The non-breaching party (Buyer) may treat the repudiation as an immediate, total breach and sue for damages right away without waiting until December 1."
    },
    {
        id: 25,
        topic: "Remedies / Specific Performance",
        fp: "Seller agrees in writing to sell his unique historic mansion to Buyer for $1,000,000. Closing is set for December 1. On November 1, Seller calls Buyer and states, 'I cannot bear to sell the house, the deal is off.' Buyer immediately finds another house but really wants the mansion.",
        q: "If Buyer sues Seller, can Buyer obtain specific performance?",
        opts: [
            "No, because specific performance is an equitable remedy that is never granted for real estate contracts.",
            "Yes, because real estate is inherently unique, making monetary damages an inadequate legal remedy.",
            "No, because Buyer mitigated damages by finding another house.",
            "Yes, because all contracts over $500 explicitly authorize equitable relief."
        ],
        ans: 1,
        exp: "Specific performance is an equitable remedy granted when the subject matter of the contract is unique and monetary expectation damages are inadequate. Courts universally consider every parcel of real estate (especially a historic mansion) to be inherently unique, making specific performance the standard remedy for a seller's breach of a land sale contract."
    }
];