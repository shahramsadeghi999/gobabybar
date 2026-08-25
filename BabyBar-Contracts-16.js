const examData = [
    // FACT PATTERN 1 (Q1-Q2)
    {
        id: 1,
        topic: "Formation / UCC 2-207 (Conduct & Knockout)",
        fp: "Buyer Corp emails a purchase order to Seller Inc. for 5,000 industrial filters. The order states: 'No arbitration clauses are permitted.' Seller sends a signed acknowledgment stating: 'Acceptance is expressly made conditional on Buyer's assent to our mandatory arbitration clause.' Buyer never expressly assents, but Seller ships the filters anyway. Buyer receives, accepts, and uses the filters. A defect causes a massive factory fire.",
        q: "Since the writings failed to form a contract, what governs the dispute resolution under the UCC?",
        opts: [
            "The contract consists of the terms on which the writings agree, plus standard UCC gap-fillers, meaning the conflicting arbitration terms drop out completely.",
            "The seller's arbitration clause governs because shipping the goods operated as the final legal action in the commercial sequence.",
            "The buyer's prohibition strictly controls under the mirror image rule.",
            "No contract was formed at all, requiring the buyer to return the burned filters."
        ],
        ans: 0,
        exp: "Under UCC § 2-207(1), making an acceptance 'expressly conditional' on new terms is a counteroffer. Because Buyer never expressly assented, no contract was formed by the writings. However, under § 2-207(3), a contract was formed by their CONDUCT (shipping and using). The terms are those on which the writings agree, plus UCC gap-fillers. The conflicting arbitration clauses are knocked out."
    },
    {
        id: 2,
        topic: "Defenses / Statute of Frauds (Receipt & Acceptance Exception)",
        fp: "Buyer Corp emails a purchase order to Seller Inc. for 5,000 industrial filters. The order states: 'No arbitration clauses are permitted.' Seller sends a signed acknowledgment stating: 'Acceptance is expressly made conditional on Buyer's assent to our mandatory arbitration clause.' Buyer never expressly assents, but Seller ships the filters anyway. Buyer receives, accepts, and uses the filters.\n\nAssume instead the initial agreement for 10,000 filters was purely oral over the phone. Seller only shipped 2,000 filters. Buyer received, accepted, and paid for the 2,000 filters. Buyer then canceled the rest of the 10,000-unit oral order, asserting the Statute of Frauds.",
        q: "Is the oral agreement for the remaining 8,000 filters enforceable?",
        opts: [
            "Yes, because partial performance inherently removes the entire commercial contract from all statutory writing requirements.",
            "The oral contract is completely enforceable only to the extent of the 2,000 goods actually received and accepted; the remaining 8,000 are barred by the Statute of Frauds.",
            "Yes, because the commercial value of the initial shipment established an implied novation.",
            "No, because the entire contract is void ab initio for lacking a formal signature."
        ],
        ans: 1,
        exp: "Under UCC § 2-201(3)(c), an oral contract for goods over $500 that violates the Statute of Frauds becomes enforceable 'with respect to goods for which payment has been made and accepted or which have been received and accepted.' The contract is valid for the 2,000 filters accepted, but the SOF still bars enforcement of the remaining 8,000."
    },
    // FACT PATTERN 2 (Q3-Q4)
    {
        id: 3,
        topic: "Defenses / Infancy & Misrepresentation of Age",
        fp: "Tim, a 17-year-old, presents a highly convincing, sophisticated fake ID to a luxury loft landlord, claiming to be 22. The landlord reasonably relies on the ID and signs a 1-year lease with Tim. Three months later, Tim accidentally causes a massive water leak, completely destroying the loft's interior. Tim immediately moves out and disaffirms the lease, revealing he is only 17.",
        q: "Does Tim's intentional misrepresentation of his age prevent him from disaffirming the contract?",
        opts: [
            "Yes, because fraudulent inducement absolutely strips a minor of all equitable incapacity protections under modern common law.",
            "Yes, because executing a lease agreement legally emancipates a minor.",
            "In most jurisdictions, the minor may still legally disaffirm the contract, although the landlord may independently pursue a tort claim for fraud or seek equitable restitution.",
            "No, because landlords bear strict absolute liability when verifying the identity of prospective tenants."
        ],
        ans: 2,
        exp: "At common law and in the majority of jurisdictions, a minor's misrepresentation of age does NOT prevent them from disaffirming a contract. The contract remains voidable by the minor. However, to prevent severe injustice, many modern courts allow the defrauded adult to sue the minor in tort for deceit/fraud, or require the minor to pay equitable restitution for the damage."
    },
    {
        id: 4,
        topic: "Defenses / Infancy Ratification by Conduct",
        fp: "Tim, a 17-year-old, presents a highly convincing, sophisticated fake ID to a luxury loft landlord, claiming to be 22. The landlord reasonably relies on the ID and signs a 1-year lease with Tim. Three months later, Tim accidentally causes a massive water leak, completely destroying the loft's interior. Tim immediately moves out and disaffirms the lease, revealing he is only 17.\n\nAssume instead Tim caused no damage. The day he turned 18, he moved out of the apartment to live with a friend. However, he left his massive, heavy pool table and extensive furniture collection inside the loft for two full months, retaining the keys and preventing the landlord from renting it.",
        q: "Has Tim legally ratified the lease?",
        opts: [
            "No, because he formally vacated the premises on the exact date he achieved the age of majority.",
            "No, because mere physical property retention does not constitute affirmative financial assent.",
            "Yes, but only if he continued to submit monthly rental payments via certified check.",
            "Yes, because retaining significant benefits or exercising continued dominion over the property for an unreasonable time after reaching the age of majority constitutes implied ratification."
        ],
        ans: 3,
        exp: "A minor can disaffirm a contract, but if they fail to do so within a reasonable time after turning 18, or if they continue to retain the benefits/exercise dominion over the property (like keeping furniture there and holding the keys), they impliedly ratify the contract by their conduct and lose the power to disaffirm."
    },
    // FACT PATTERN 3 (Q5-Q7)
    {
        id: 5,
        topic: "Terms / Parol Evidence Rule (Naturally Omitted Term)",
        fp: "Bakery and Manufacturer sign a completely integrated written contract for the purchase of a specialized commercial printing press. The contract details price, delivery, and installation. Prior to signing, Manufacturer orally agreed to provide '5 hours of free operational training' for the Bakery's staff. The written contract is completely silent regarding training.",
        q: "Is evidence of the oral agreement for free training admissible as a collateral agreement?",
        opts: [
            "If the contract is completely integrated, the evidence is strictly barred because an agreement for operational training is not supported by separate consideration and is a term that would naturally be included in the writing.",
            "Yes, because training is universally recognized as a legally distinct service exempt from goods contracts.",
            "No, because the Parol Evidence Rule only applies to real estate transactions.",
            "Yes, because the oral promise was made chronologically prior to the execution of the written document."
        ],
        ans: 0,
        exp: "To bypass the Parol Evidence Rule as a 'collateral agreement,' the oral agreement must be supported by separate consideration OR be such a term as in the circumstances might naturally be omitted from the writing. Free training for a specialized machine is something that would naturally and normally be included in the main contract. Since the writing is completely integrated, the oral evidence is barred."
    },
    {
        id: 6,
        topic: "Formation / Waiver of 'No Oral Modification' Clause",
        fp: "Bakery and Manufacturer sign a completely integrated written contract for the purchase of a specialized commercial printing press. The contract details price, delivery, and installation. Prior to signing, Manufacturer orally agreed to provide '5 hours of free operational training' for the Bakery's staff. The written contract is completely silent regarding training.\n\nAssume the written contract contained a strict clause stating: 'No oral modifications permitted.' Six months later, Bakery calls Manufacturer and asks to delay a scheduled maintenance payment by one month. Manufacturer orally agrees. Bakery relies on this and spends the money on flour. Manufacturer then sues for the delayed payment.",
        q: "Is the oral modification to delay payment legally enforceable?",
        opts: [
            "No, because commercial parties are strictly bound by the four corners of their written documents.",
            "Yes, because an oral modification that is barred by a contract clause can still operate as a valid legal waiver if the other party foreseeably and materially relies on it.",
            "No, because the Uniform Commercial Code prohibits such equitable waivers in transactions exceeding ten thousand dollars.",
            "Yes, but only if the delay was caused by a declared national emergency."
        ],
        ans: 1,
        exp: "Under UCC § 2-209(4) (and similarly at common law), an attempt at modification that fails because of a 'No Oral Modification' clause can still operate as a 'waiver.' If the party relying on the oral waiver materially changes their position (detrimental reliance), the waiver becomes binding and cannot be abruptly retracted."
    },
    {
        id: 7,
        topic: "Defenses / Statute of Frauds (Modification Threshold)",
        fp: "Bakery and Manufacturer sign a completely integrated written contract for the purchase of a specialized commercial printing press. The contract details price, delivery, and installation. Prior to signing, Manufacturer orally agreed to provide '5 hours of free operational training' for the Bakery's staff. The written contract is completely silent regarding training.\n\nAssume Bakery had a separate written contract to buy generic baking sheets from Supplier for $400. Later, they orally agreed to increase the order, raising the total price to $600.",
        q: "Is the oral modification raising the price to $600 enforceable?",
        opts: [
            "Yes, because the original agreement was validly formed beneath the statutory threshold.",
            "Yes, because oral modifications automatically supersede written boilerplate language.",
            "No, because any modification that brings the total contract price to $500 or more must independently satisfy the strict writing requirements of the Statute of Frauds.",
            "No, because modifications require independent consideration under the Uniform Commercial Code."
        ],
        ans: 2,
        exp: "Under UCC § 2-209(3), the requirements of the Statute of Frauds must be satisfied if the contract AS MODIFIED is within its provisions. Because the modification raised the total price to $600 (above the $500 threshold), the modification must be in writing to be enforceable."
    },
    // FACT PATTERN 4 (Q8-Q9)
    {
        id: 8,
        topic: "Performance / Impracticability (UCC Allocation)",
        fp: "Farmer has three separate contracts to deliver 1,000 tons of specialized hybrid corn to three different commercial buyers (3,000 tons total). A severe, unpredicted regional drought destroys exactly 50% of Farmer's entire hybrid crop, leaving him with only 1,500 tons total. Purchasing this specific hybrid corn elsewhere is physically impossible.",
        q: "Under the UCC, what must Farmer do with the remaining 1,500 tons to avoid total breach?",
        opts: [
            "Deliver all 1,500 tons to the buyer who signed their contract first.",
            "Keep the corn, as the partial destruction completely discharges all three contracts under objective impossibility.",
            "Auction the remaining corn to the highest bidder among the three.",
            "The seller must allocate the available supply fairly and reasonably among his regular customers and notify the buyers that there will be a quota."
        ],
        ans: 3,
        exp: "Under UCC § 2-615(b), when impracticability affects only a part of the seller's capacity to perform, the seller must allocate production and deliveries among his customers. The allocation must be fair and reasonable, and the seller must seasonably notify the buyers of the estimated quota. The buyers can then choose to accept the quota or cancel the contract."
    },
    {
        id: 9,
        topic: "Performance / Risk of Loss (FOB Destination + Non-Conforming)",
        fp: "Farmer has three separate contracts to deliver 1,000 tons of specialized hybrid corn to three different commercial buyers (3,000 tons total). A severe, unpredicted regional drought destroys exactly 50% of Farmer's entire hybrid crop, leaving him with only 1,500 tons total. Purchasing this specific hybrid corn elsewhere is physically impossible.\n\nAssume instead Farmer shipped 1,000 tons of generic wheat to a Buyer under a contract stating 'FOB Buyer's Warehouse.' However, Farmer accidentally shipped rye instead of wheat. The carrier arrived at Buyer's warehouse. Before Buyer could inspect or reject the grain, a freak tornado destroyed the truck and the grain.",
        q: "Who bears the risk of loss for the destroyed grain?",
        opts: [
            "The seller bears the risk of loss, because shipping non-conforming goods gives the buyer a right of rejection, preventing the risk from passing even if tendered at the destination.",
            "The buyer, because the risk of loss legally transferred the exact moment the goods were tendered at the required destination.",
            "The shipping carrier, due to strict absolute liability for transit failures.",
            "The risk is split evenly under the doctrine of comparative commercial fault."
        ],
        ans: 0,
        exp: "Normally, in an FOB Destination contract, risk passes when the goods are tendered at the destination. HOWEVER, under UCC § 2-510, if a tender of goods so fails to conform to the contract as to give a right of rejection (rye instead of wheat), the risk of loss remains on the SELLER until cure or acceptance. Thus, Seller bears the risk."
    },
    // FACT PATTERN 5 (Q10-Q12)
    {
        id: 10,
        topic: "Performance / Demand for Assurances (Inadequate Response)",
        fp: "Buyer agrees to purchase custom machinery from Seller, delivery on August 1. On July 1, Buyer hears a highly credible industry rumor that Seller's manufacturing plant has been shut down by federal regulators. Buyer immediately emails a written demand for adequate assurances. On July 5, Seller replies: 'Don't worry, I'll try my best to get it to you.'",
        q: "Is Seller's July 5 response legally adequate to prevent an anticipatory repudiation?",
        opts: [
            "Yes, because any written communication from the seller preserves the contract.",
            "No, because a vague promise to 'try' does not constitute an adequate assurance of due performance under commercial standards, functioning as a repudiation.",
            "Yes, because the August 1 deadline had not yet officially elapsed.",
            "No, because assurances must be accompanied by a formal financial bond."
        ],
        ans: 1,
        exp: "Under UCC § 2-609, when a party makes a justified demand for adequate assurances, the other party must provide assurances that are 'adequate under the circumstances.' A vague, non-committal statement like 'I'll try my best' when a plant is supposedly shut down is inadequate. Failure to provide adequate assurances within a reasonable time is treated as an anticipatory repudiation."
    },
    {
        id: 11,
        topic: "Performance / Retraction of Anticipatory Repudiation (Cover)",
        fp: "Buyer agrees to purchase custom machinery from Seller, delivery on August 1. On July 1, Buyer hears a highly credible industry rumor that Seller's manufacturing plant has been shut down by federal regulators. Buyer immediately emails a written demand for adequate assurances. On July 5, Seller replies: 'Don't worry, I'll try my best to get it to you.'\n\nAssume Seller explicitly repudiated on July 1. On July 15, Buyer signed a binding contract with a substitute manufacturer to cover the machinery. On July 16, Seller emailed: 'Plant is reopened. I retract my repudiation and will deliver on August 1.'",
        q: "Was Seller's July 16 retraction legally valid?",
        opts: [
            "Yes, because the retraction occurred prior to the designated August 1 deadline.",
            "Yes, because written communications inherently override oral or constructive repudiations.",
            "No, because the aggrieved party materially changed their position in detrimental reliance on the repudiation by securing a substitute commercial vendor.",
            "No, because anticipatory repudiations are completely irrevocable once placed in writing."
        ],
        ans: 2,
        exp: "A party can retract an anticipatory repudiation before their performance is due, UNLESS the aggrieved party has canceled the contract, materially changed their position, OR indicated they consider the repudiation final. Because Buyer materially changed position by obtaining substitute goods (cover) on July 15, Seller's power to retract was extinguished."
    },
    {
        id: 12,
        topic: "Performance / Installment Contract Repudiation",
        fp: "Buyer agrees to purchase custom machinery from Seller, delivery on August 1. On July 1, Buyer hears a highly credible industry rumor that Seller's manufacturing plant has been shut down by federal regulators. Buyer immediately emails a written demand for adequate assurances. On July 5, Seller replies: 'Don't worry, I'll try my best to get it to you.'\n\nAssume instead this is an installment contract for 12 monthly shipments of generic gears. Shipment 1 arrives, but 40% of the gears are severely cracked and completely unusable. Buyer rejects Shipment 1.",
        q: "What right does Buyer possess regarding the remaining 11 installments?",
        opts: [
            "Buyer must blindly accept all future deliveries and seek monetary damages exclusively.",
            "Buyer may instantly terminate the entire commercial agreement under the strict application of the perfect tender rule.",
            "Buyer can sue for specific performance but must accept the shipments.",
            "The massive defect in the first installment gives the buyer reasonable grounds for insecurity, allowing them to demand adequate assurances regarding the future installments or potentially treat it as a breach of the whole contract if it substantially impairs the entire value."
        ],
        ans: 3,
        exp: "Under UCC § 2-612, a non-conformity in one installment allows cancellation of the whole contract only if it 'substantially impairs the value of the whole contract.' A 40% failure rate in the first delivery strongly suggests systemic manufacturing issues, giving the buyer reasonable grounds to demand assurances for future deliveries, and potentially justifying cancellation of the whole contract depending on the factual impairment."
    },
    // FACT PATTERN 6 (Q13-Q15)
    {
        id: 13,
        topic: "Third Parties / Assignment (Anti-Assignment Clause UCC 2-210)",
        fp: "City hires PavingCo to pave Main Street for $50,000. The contract contains a prominent clause stating: 'The contract cannot be assigned.' PavingCo gets overwhelmed with other jobs and attempts to assign its physical paving duties to ShadyPaving, an equally skilled competitor.",
        q: "Is PavingCo's transfer of the paving duties to ShadyPaving legally valid?",
        opts: [
            "Under UCC guidelines and modern common law, a general clause prohibiting the assignment of 'the contract' is construed as barring only the delegation to the assignee of the assignor's performance duties, making this transfer invalid.",
            "Yes, because routine or mechanical duties are freely delegable.",
            "Yes, because an anti-assignment clause only destroys the right to assign, not the power.",
            "No, because the municipality possesses sovereign immunity."
        ],
        ans: 0,
        exp: "This is a specific rule of construction under UCC § 2-210(4) and Restatement § 322. A general clause prohibiting 'assignment of the contract' is construed as barring only the DELEGATION of the assignor's duties. Therefore, while PavingCo could still assign its right to get paid, it is legally barred from delegating the physical work to ShadyPaving."
    },
    {
        id: 14,
        topic: "Third Parties / Beneficiary Vesting (Assent at Request)",
        fp: "City hires PavingCo to pave Main Street for $50,000. The contract contains a prominent clause stating: 'The contract cannot be assigned.' PavingCo gets overwhelmed with other jobs and attempts to assign its physical paving duties to ShadyPaving, an equally skilled competitor.\n\nAssume instead PavingCo contracted with Supplier to buy asphalt, explicitly stating 'Deliver the asphalt directly to Subcontractor.' Supplier calls Subcontractor and asks, 'Do you accept this delivery arrangement?' Subcontractor replies, 'Yes.' PavingCo and Supplier then mutually agree to cancel the asphalt order.",
        q: "Was the cancellation legally effective against Subcontractor?",
        opts: [
            "Yes, because the original contracting parties retain the absolute, unqualified right to modify or cancel the agreement at any time.",
            "No, because the third-party beneficiary's rights legally vested the exact moment he affirmatively assented to the contract at the explicit request of the promisor.",
            "Yes, because the subcontractor failed to demonstrate actual detrimental financial reliance.",
            "No, because the cancellation was not formally approved by a judicial officer."
        ],
        ans: 1,
        exp: "A third-party beneficiary's rights vest when they (1) materially rely on the promise, (2) bring suit, or (3) assent to it at the request of the promisor or promisee. Because the Supplier (promisor) called and asked for assent, and the Subcontractor (beneficiary) said 'Yes,' the rights vested immediately. The subsequent cancellation is invalid."
    },
    {
        id: 15,
        topic: "Third Parties / Defenses Against Assignee",
        fp: "City hires PavingCo to pave Main Street for $50,000. The contract contains a prominent clause stating: 'The contract cannot be assigned.' PavingCo gets overwhelmed with other jobs and attempts to assign its physical paving duties to ShadyPaving, an equally skilled competitor.\n\nAssume PavingCo validly assigned its right to receive the $50,000 to Local Bank. City received proper notice. However, PavingCo did a terrible job, leaving massive potholes. Bank demands payment from City. City refuses.",
        q: "Can City successfully refuse to pay the Bank?",
        opts: [
            "No, because the assignment transferred an absolute, perfected security interest.",
            "No, because financial institutions are immune from upstream service disputes.",
            "Yes, because the assignee completely stands in the shoes of the assignor, meaning the obligor may assert any valid contract defense against the assignee that it could have asserted against the assignor.",
            "Yes, but only if the city explicitly filed a formal grievance within ten days."
        ],
        ans: 2,
        exp: "An assignee (Bank) stands in the shoes of the assignor (PavingCo). The obligor (City) can raise any defense against the assignee that it could have raised against the assignor, provided the defense arises from the contract itself. Because PavingCo materially breached by doing a terrible job, City's duty to pay is excused, even against the Bank."
    },
    // FACT PATTERN 7 (Q16-Q17)
    {
        id: 16,
        topic: "Performance / Constructive Conditions Concurrent (Real Estate)",
        fp: "Buyer agrees in writing to purchase Blackacre from Seller for $500,000. The contract does not specify the exact timing or sequence of the exchange of the money and the deed. On the closing date, Buyer demands Seller hand over the deed first. Seller refuses to hand over the deed until Buyer hands over the certified check.",
        q: "Who is legally correct regarding the required sequence of performance?",
        opts: [
            "The buyer, because common law dictates that physical property transfers must precede financial compensation.",
            "The seller, because the delivery of real estate requires prior financial validation.",
            "Neither, because the contract is rendered completely void for vagueness.",
            "Under common law, where performances can be rendered simultaneously, they are treated as mutually dependent constructive conditions concurrent, meaning each party must tender performance at the exact same time."
        ],
        ans: 3,
        exp: "When a contract does not specify the sequence of performance, and the performances can be rendered simultaneously (like handing over a check and handing over a deed), the law implies 'constructive conditions concurrent.' This means each party's duty to perform is conditioned on the other party tendering performance at the same time. Neither has to go first."
    },
    {
        id: 17,
        topic: "Performance / Retraction of Waiver of Condition",
        fp: "Buyer agrees in writing to purchase Blackacre from Seller for $500,000. The contract does not specify the exact timing or sequence of the exchange of the money and the deed. On the closing date, Buyer demands Seller hand over the deed first. Seller refuses to hand over the deed until Buyer hands over the certified check.\n\nAssume instead the contract was expressly conditioned on Buyer obtaining a 5% loan. Buyer applied, but then told Seller, 'I waive the loan condition, I'll pay cash.' A week later, well before closing and before Seller changed any behavior, Buyer retracted the waiver and reinstated the condition.",
        q: "Is Buyer's retraction of the waiver legally valid?",
        opts: [
            "A party may freely retract a waiver of an executory condition prior to the deadline, provided the other party has not materially changed position in justifiable reliance.",
            "No, because real estate waivers must inherently be executed in a formalized writing.",
            "Yes, because the retraction was formally notarized.",
            "No, because waivers of express conditions are permanent and completely irrevocable once communicated to a commercial counterparty."
        ],
        ans: 0,
        exp: "A waiver of an executory condition (a condition that is not yet due to occur) can be retracted IF the other party hasn't materially relied on it AND there is still time for the condition to occur. Because Seller had not changed behavior in reliance on the waiver, Buyer can successfully retract it."
    },
    // FACT PATTERN 8 (Q18-Q20)
    {
        id: 18,
        topic: "Remedies / Lost Volume Seller (Fixed Overhead)",
        fp: "Appliance Store has an unlimited supply of identical washing machines. Customer contracts to buy one for $1,000. The wholesale cost to the Store for the machine is $600. Customer breaches. Store immediately resells the exact same machine to someone else for $1,000. Store claims it is a lost volume seller.",
        q: "If Store's general fixed overhead (rent, electricity) apportioned to each machine is $100, what is the exact amount Store recovers from the breaching Customer?",
        opts: [
            "$300, because fixed overhead costs must be strictly deducted from expected commercial profits.",
            "Under the UCC, a lost volume seller recovers their expected gross profit without deducting fixed overhead costs; therefore, the store recovers $400.",
            "Zero damages, because the successful mitigation effectively neutralized the commercial detriment.",
            "$1,000, representing the full expectation interest of the contract."
        ],
        ans: 1,
        exp: "Under UCC § 2-708(2), a lost volume seller is entitled to recover the profit (including reasonable overhead) which the seller would have made from full performance by the buyer. Fixed overhead costs are NOT deducted from the gross profit margin. Thus, Store recovers the full $400 profit ($1,000 price - $600 wholesale cost)."
    },
    {
        id: 19,
        topic: "Remedies / Liquidated Damages (Reasonable at Formation, Zero Actual)",
        fp: "Appliance Store has an unlimited supply of identical washing machines. Customer contracts to buy one for $1,000. The wholesale cost to the Store for the machine is $600. Customer breaches. Store immediately resells the exact same machine to someone else for $1,000. Store claims it is a lost volume seller.\n\nAssume instead the City hired a Builder to construct a bridge. The contract contained a liquidated damages clause: 'Builder pays $1,000 per day for any delay.' At the time of contracting, this was a highly reasonable estimate. Builder is 10 days late. However, due to an unrelated pandemic, the city was locked down, meaning traffic was zero, and the City suffered absolutely $0 in actual damages.",
        q: "Under the modern view, is the liquidated damages clause enforceable?",
        opts: [
            "No, because government entities are required to prove actual out-of-pocket losses.",
            "No, because the enforcement of a penalty clause when zero actual damages occurred violates fundamental commercial public policy.",
            "Yes, a liquidated damages clause is enforceable if it was a reasonable forecast of harm viewed as of the time the contract was originally formed, regardless of the ultimate actual damages.",
            "Yes, but the amount is reduced to a nominal statutory minimum."
        ],
        ans: 2,
        exp: "Under the modern Restatement and UCC § 2-718(1), a liquidated damages clause is enforceable if the amount is reasonable in light of EITHER the anticipated harm (at the time of contracting) OR the actual harm caused by the breach. Because $1,000/day was highly reasonable at the time of formation, the clause is valid even if actual damages surprisingly ended up being zero."
    },
    {
        id: 20,
        topic: "Remedies / Consequential Damages Foreseeability",
        fp: "Appliance Store has an unlimited supply of identical washing machines. Customer contracts to buy one for $1,000. The wholesale cost to the Store for the machine is $600. Customer breaches. Store immediately resells the exact same machine to someone else for $1,000. Store claims it is a lost volume seller.\n\nAssume a commercial Baker ordered a custom oven part from a Manufacturer. Manufacturer negligently delayed delivery by 10 days. Baker lost $50,000 in lucrative catering contracts because the bakery was completely shut down. Manufacturer had no idea the bakery lacked a backup oven or was bidding on catering contracts.",
        q: "Can Baker recover the $50,000 in lost profits from Manufacturer?",
        opts: [
            "Bakery recovers the full amount because direct negligence inherently satisfies the 'but-for' causation standard.",
            "Bakery recovers the full amount because lost profits represent standard expectation damages in commercial equipment transactions.",
            "Yes, because the consequential damages were inherently predictable in a commercial food service environment.",
            "Unrecoverable because the consequential damages were not reasonably foreseeable to the breaching party at the time of contract formation."
        ],
        ans: 3,
        exp: "Under the rule of Hadley v. Baxendale, consequential damages (like massive lost profits from a complete business shutdown or special catering contracts) are only recoverable if they were reasonably foreseeable to the breaching party at the time the contract was made. Because Manufacturer did not know Baker lacked a backup or had special contracts, the lost profits were unforeseeable."
    },
    // FACT PATTERN 9 (Q21-Q22)
    {
        id: 21,
        topic: "Discharge / Substituted Contract vs Accord",
        fp: "Debtor owes Creditor $1,000, due immediately. Debtor calls Creditor and says, 'I can't pay the $1,000. Will you accept my vintage Rolex watch instead to completely settle the debt right now?' Creditor agrees, stating: 'Yes, our previous agreement is canceled immediately, and you now owe me the watch.'",
        q: "What is the legal classification of this new agreement?",
        opts: [
            "A substituted contract, which immediately discharges the original duty and replaces it with the new duty to deliver the watch.",
            "An accord and satisfaction, which suspends the original duty until the watch is physically delivered.",
            "A formal novation of the commercial debt.",
            "An invalid oral modification lacking consideration."
        ],
        ans: 0,
        exp: "The distinction between an accord and a substituted contract depends on intent. If the parties intend the new agreement to immediately discharge the old duty, it is a substituted contract. If they intend the old duty to be suspended and only discharged upon performance of the new agreement, it is an accord. Creditor explicitly stated 'our previous agreement is canceled immediately,' making it a substituted contract."
    },
    {
        id: 22,
        topic: "Discharge / UCC 3-311 'Under Protest'",
        fp: "Debtor owes Creditor $1,000, due immediately. Debtor calls Creditor and says, 'I can't pay the $1,000. Will you accept my vintage Rolex watch instead to completely settle the debt right now?' Creditor agrees, stating: 'Yes, our previous agreement is canceled immediately, and you now owe me the watch.'\n\nAssume instead the debt was for an unliquidated (disputed) amount regarding defective landscaping work. Debtor sent a check for $800 marked 'payment in full.' Creditor furiously crossed out the words 'payment in full', wrote 'Cashed UNDER PROTEST', and cashed the check.",
        q: "Under the UCC, is the remaining debt discharged?",
        opts: [
            "No, because the creditor successfully preserved his right to sue for the remaining balance under UCC § 1-308.",
            "Yes, it completely discharges the debt; under UCC § 3-311, cashing a full-payment check for an unliquidated debt discharges the obligation regardless of any restrictive endorsements or words of protest added by the creditor.",
            "No, because the check was heavily altered.",
            "Yes, but only if the debtor provided a formal promissory note."
        ],
        ans: 1,
        exp: "While UCC § 1-308 generally allows parties to perform 'under protest' and reserve rights, UCC § 3-311 explicitly overrides this for 'payment in full' checks on disputed debts. If a creditor cashes a full-payment check on a disputed debt, the debt is discharged, PERIOD. Words of protest written on the check are entirely ineffective."
    },
    // FACT PATTERN 10 (Q23-Q25)
    {
        id: 23,
        topic: "Remedies / Specific Performance (Services)",
        fp: "A highly famous actor signs a contract with Studio to star in a blockbuster movie. Halfway through filming, the actor breaches the contract and walks off the set, refusing to finish the movie. Studio sues the actor.",
        q: "Can Studio obtain a specific performance injunction forcing the actor to finish filming the movie?",
        opts: [
            "Yes, because the actor is uniquely skilled and irreplaceable.",
            "Yes, because the studio will suffer catastrophic financial losses.",
            "No, because specific performance is never granted for personal service contracts, as it is difficult for courts to supervise and implicates Thirteenth Amendment prohibitions against involuntary servitude.",
            "No, because commercial entertainment contracts mandate liquidated damages exclusively."
        ],
        ans: 2,
        exp: "Courts will NEVER grant specific performance to force a person to perform a personal service contract (like acting, singing, or painting). Doing so would be equivalent to involuntary servitude (violating the 13th Amendment) and would be practically impossible for a court to supervise."
    },
    {
        id: 24,
        topic: "Remedies / Restitution of Deposit (UCC 2-718 Statutory Baseline)",
        fp: "A highly famous actor signs a contract with Studio to star in a blockbuster movie. Halfway through filming, the actor breaches the contract and walks off the set, refusing to finish the movie. Studio sues the actor.\n\nAssume instead a Consumer contracted to buy a specific custom boat from a Dealership for $10,000. Consumer paid a $3,000 deposit. Consumer unjustifiably breached the contract before delivery. The contract contained no liquidated damages clause. Dealership proved it suffered absolutely $0 in actual damages from the breach.",
        q: "Under UCC § 2-718(2), what amount of the deposit must Dealership return to Consumer?",
        opts: [
            "The dealership retains the entire deposit because breaching parties forfeit all rights to restitution.",
            "The consumer receives exactly $1,000 back under comparative fault.",
            "The consumer receives exactly $3,000 back because the seller suffered zero harm.",
            "The breaching buyer is entitled to restitution of the deposit minus twenty percent of the total contract price or $500, whichever is smaller, meaning the buyer recovers exactly $2,500."
        ],
        ans: 3,
        exp: "This is a very specific UCC formula. Under UCC § 2-718(2), if a buyer breaches and there is no liquidated damages clause, the seller is entitled to keep 20% of the total contract price OR $500, whichever is SMALLER, as a statutory baseline even if they suffered zero actual damages. 20% of $10k = $2,000. $500 is smaller. The seller keeps $500. Buyer gets the remaining $2,500 of their $3,000 deposit back."
    },
    {
        id: 25,
        topic: "Remedies / Promissory Estoppel Limitation",
        fp: "A highly famous actor signs a contract with Studio to star in a blockbuster movie. Halfway through filming, the actor breaches the contract and walks off the set, refusing to finish the movie. Studio sues the actor.\n\nAssume Grandfather orally promises to give Granddaughter $50,000 to buy a new car. In reliance, Granddaughter goes out and signs a binding finance contract for a $15,000 car. Grandfather then refuses to pay anything.",
        q: "What is the most likely legal outcome regarding Grandfather's promise?",
        opts: [
            "The court will strictly enforce the promise using promissory estoppel and award the full $50,000 expectation interest.",
            "The grandfather is completely shielded by the Statute of Frauds.",
            "The promise is void for lack of mutuality.",
            "The court will enforce the promise using promissory estoppel, but will strictly limit the recovery to the $15,000 actually spent in detrimental reliance rather than the $50,000 expectation, as justice requires."
        ],
        ans: 3,
        exp: "A gratuitous promise is enforceable under promissory estoppel if the promisor reasonably expected it to induce reliance, and it actually did induce detrimental reliance. However, courts have broad discretion to limit the remedy 'as justice requires.' In cases of massive disparity between the promise ($50k) and the actual reliance ($15k), courts typically award only reliance damages ($15k) to make the promisee whole."
    }
];