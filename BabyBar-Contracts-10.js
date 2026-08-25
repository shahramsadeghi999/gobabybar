const examData = [
    // FACT PATTERN 1 (Q1-Q3)
    {
        id: 1,
        topic: "Formation / UCC Firm Offer Limit",
        fp: "Merchant A sends a signed, written offer to Merchant B to sell 5,000 customized microchips for $10,000. The letter explicitly states, 'This offer will be held open for six months.' No consideration is paid by Merchant B. After four months, Merchant A emails a revocation of the offer to Merchant B. On the first day of the fifth month, Merchant B faxes an acceptance.",
        q: "Is there a legally enforceable contract formed by Merchant B's acceptance?",
        opts: [
            "No, because under the UCC firm offer rule, the maximum period of irrevocability without independent consideration is strictly three months.",
            "Yes, because a written, signed statement by a merchant establishes an absolute guarantee that supersedes any statutory time constraints.",
            "No, because customized microchips are classified as services rather than standard goods.",
            "Yes, because the offeror is legally bound by the specific time duration explicitly promised in the written document."
        ],
        ans: 0,
        exp: "Under UCC § 2-205 (Firm Offer), a merchant's signed, written offer assuring it will be held open is irrevocable without consideration. However, the period of irrevocability cannot exceed three months (90 days). Because the acceptance occurred in month 5, after the 3-month statutory limit, the offer had become revocable, and Merchant A's month 4 revocation was effective."
    },
    {
        id: 2,
        topic: "Formation / Option Contracts & Rejection",
        fp: "Merchant A sends a signed, written offer to Merchant B to sell 5,000 customized microchips for $10,000. The letter explicitly states, 'This offer will be held open for six months.' No consideration is paid by Merchant B. After four months, Merchant A emails a revocation of the offer to Merchant B. On the first day of the fifth month, Merchant B faxes an acceptance.\n\nAssume instead that Merchant B actually paid $500 in consideration to keep the offer open for the full six months. In month two, Merchant B mailed a formal rejection. In month four, B changed their mind and mailed an acceptance.",
        q: "Does B's month two rejection terminate the option contract?",
        opts: [
            "Yes, because a rejection instantly severs the power of acceptance for all commercial agreements.",
            "Under the Restatement and general contract principles, a rejection does not terminate an irrevocable option or firm offer unless the offeror materially relied on the rejection.",
            "Yes, because the mirror image rule prohibits any deviation from absolute assent.",
            "No, because option contracts strictly prohibit the offeree from communicating negative responses."
        ],
        ans: 1,
        exp: "Unlike standard offers, the power of acceptance under a binding option contract is NOT terminated by rejection or counteroffer. The offeree may still accept the offer within the option period, unless the offeror has materially changed their position in reliance on the rejection."
    },
    {
        id: 3,
        topic: "Formation / UCC 2-207 (Expressly Conditional)",
        fp: "Merchant A sends a signed, written offer to Merchant B to sell 5,000 customized microchips for $10,000. The letter explicitly states, 'This offer will be held open for six months.' No consideration is paid by Merchant B. After four months, Merchant A emails a revocation of the offer to Merchant B. On the first day of the fifth month, Merchant B faxes an acceptance.\n\nAssume B accepted the offer validly in month one, but B's acceptance form stated, 'Acceptance is expressly made conditional on your agreement to a 10-year warranty.' A refuses the warranty but ships the chips anyway.",
        q: "What is the legal effect of B's response under UCC § 2-207?",
        opts: [
            "It constitutes a perfect acceptance, but the warranty clause is completely ignored by the court.",
            "It operates as a mutual rescission of the initial commercial negotiation.",
            "It constitutes a rejection and a counteroffer, because the explicit inclusion of the magic language 'expressly made conditional' transforms the commercial response under UCC 2-207.",
            "It establishes an unconscionable contract of adhesion."
        ],
        ans: 2,
        exp: "Under UCC § 2-207(1), a definite expression of acceptance operates as an acceptance EVEN IF it contains additional terms, UNLESS acceptance is expressly made conditional on assent to the additional terms. Because B included that exact magic language, the form is a counteroffer, not an acceptance."
    },
    // FACT PATTERN 2 (Q4-Q5)
    {
        id: 4,
        topic: "Consideration / Preexisting Duty Exception",
        fp: "Builder contracts with Owner to excavate a commercial plot for $100,000. Halfway through the excavation, Builder discovers massive deposits of toxic waste beneath the soil that were completely invisible and utterly unforeseeable. Remediating the waste will cost an additional $150,000. Builder demands $50,000 extra to continue. Owner agrees orally. Builder finishes, but Owner refuses to pay the extra $50,000.",
        q: "Is the oral modification enforceable?",
        opts: [
            "No, because the preexisting duty rule strictly invalidates any contract modifications lacking fresh consideration.",
            "Yes, because the commercial frustration doctrine automatically doubles the contract price in environmental disputes.",
            "No, because any agreement exceeding five hundred dollars must be executed via formal notarization.",
            "The oral modification is enforceable because the discovery of toxic waste constitutes a severe, unanticipated difficulty that excuses the preexisting duty rule."
        ],
        ans: 3,
        exp: "Under common law, modifications generally require new consideration (the preexisting duty rule). However, a widely recognized exception exists for 'unforeseen difficulties.' When a severe, highly unanticipated circumstance arises (like buried toxic waste) that makes performance extremely burdensome, a modification is enforceable without new consideration if it is fair and equitable."
    },
    {
        id: 5,
        topic: "Defenses / No Oral Modification Clauses (Common Law)",
        fp: "Builder contracts with Owner to excavate a commercial plot for $100,000. Halfway through the excavation, Builder discovers massive deposits of toxic waste beneath the soil that were completely invisible and utterly unforeseeable. Remediating the waste will cost an additional $150,000. Builder demands $50,000 extra to continue. Owner agrees orally. Builder finishes, but Owner refuses to pay the extra $50,000.\n\nAssume the original written contract contained a strict clause stating: 'No oral modifications to this agreement shall be valid; all amendments must be in writing and signed.'",
        q: "Does this clause prevent Builder from enforcing the oral modification?",
        opts: [
            "At common law, 'no oral modification' clauses are generally ineffective because the parties can orally waive the clause itself alongside the modification.",
            "Yes, because parties to a commercial service contract are strictly bound by the four corners of their written documents.",
            "No, because the Uniform Commercial Code prohibits such clauses in transactions exceeding ten thousand dollars.",
            "Yes, because the Statute of Frauds automatically enforces all anti-modification clauses."
        ],
        ans: 0,
        exp: "At common law (which governs this service contract), 'No Oral Modification' (NOM) clauses are generally unenforceable. Courts reason that the parties have the power to orally agree to waive the NOM clause at the exact same time they orally agree to the modification. (Note: The UCC changes this rule for the sale of goods, enforcing NOM clauses, but this is a service contract)."
    },
    // FACT PATTERN 3 (Q6-Q8)
    {
        id: 6,
        topic: "Terms / Parol Evidence (Collateral Agreements)",
        fp: "Buyer and Seller execute a fully integrated written contract for the sale of a residential house. During the final walkthrough before signing, Seller orally agreed to sell Buyer a separate riding lawnmower located in the shed for $500. The written house contract says nothing about the lawnmower. Seller later refuses to hand over the lawnmower.",
        q: "Does the Parol Evidence Rule bar Buyer from introducing evidence of the oral agreement regarding the lawnmower?",
        opts: [
            "Yes, because the integration clause creates an irrebuttable presumption encompassing all property on the premises.",
            "The evidence is admissible because the sale of the lawnmower constitutes an entirely distinct, naturally separate collateral agreement supported by its own independent consideration.",
            "Yes, because the Parol Evidence Rule strictly prohibits contradicting a final written price term.",
            "No, because residential real estate transactions are universally exempt from formal evidentiary rules."
        ],
        ans: 1,
        exp: "The Parol Evidence Rule bars prior or contemporaneous oral agreements that contradict or supplement a fully integrated written contract. However, it does NOT bar evidence of a 'collateral agreement'—a distinct, separate contract that might naturally be made separately from the main agreement and is supported by separate consideration (like buying a lawnmower separate from buying a house)."
    },
    {
        id: 7,
        topic: "Terms / Parol Evidence (Condition Precedent)",
        fp: "Buyer and Seller execute a fully integrated written contract for the sale of a residential house. During the final walkthrough before signing, Seller orally agreed to sell Buyer a separate riding lawnmower located in the shed for $500. The written house contract says nothing about the lawnmower. Seller later refuses to hand over the lawnmower.\n\nSuppose Buyer claims that just prior to signing the house contract, they orally agreed the contract would only be legally effective if an independent architect approved the house's blueprints within ten days. The architect rejected them.",
        q: "Is evidence of this oral condition admissible?",
        opts: [
            "No, because the merger clause strictly seals the final written document from external modifications.",
            "No, because architectural approvals must be formally notarized.",
            "Evidence of the oral condition is admissible because it establishes a condition precedent to the legal formation of the entire contract, bypassing the Parol Evidence Rule.",
            "Yes, but only if the buyer sues in equity for unjust enrichment."
        ],
        ans: 2,
        exp: "A widely recognized exception to the Parol Evidence Rule allows a party to introduce evidence of an oral agreement establishing a condition precedent to the FORMATION or effectiveness of the entire contract. Showing that the contract wasn't supposed to exist until the architect approved is admissible."
    },
    {
        id: 8,
        topic: "Terms / Parol Evidence (Fraud)",
        fp: "Buyer and Seller execute a fully integrated written contract for the sale of a residential house. During the final walkthrough before signing, Seller orally agreed to sell Buyer a separate riding lawnmower located in the shed for $500. The written house contract says nothing about the lawnmower. Seller later refuses to hand over the lawnmower.\n\nAssume Buyer claims Seller intentionally lied about the foundation of the house being structurally sound to induce Buyer to sign the completely integrated 'as-is' contract.",
        q: "Is evidence of Seller's intentional misrepresentation admissible?",
        opts: [
            "No, because the 'as-is' clause legally shifts all structural risks directly to the purchasing party.",
            "Yes, but the remedy is strictly limited to monetary damages rather than full rescission.",
            "No, because the Parol Evidence Rule bars oral statements that directly contradict explicit written liability waivers.",
            "Evidence of intentional misrepresentation is a universally recognized exception to the Parol Evidence Rule that allows the aggrieved party to invalidate the agreement."
        ],
        ans: 3,
        exp: "While the Parol Evidence Rule bars prior agreements that contradict the writing, evidence of fraud, misrepresentation, or duress is ALWAYS admissible to show that the contract itself is invalid or was induced by deceit, regardless of how completely integrated the writing is or the presence of an 'as-is' clause."
    },
    // FACT PATTERN 4 (Q9-Q11)
    {
        id: 9,
        topic: "Performance / Risk of Loss (FOB Destination)",
        fp: "Music Store contracts to purchase 1,000 customized guitars from Manufacturer. The contract states: 'FOB Buyer's Warehouse.' Manufacturer loads the guitars onto an independent commercial trucking carrier. One mile from the buyer's warehouse, the truck is struck by lightning and the guitars are destroyed.",
        q: "Who bears the risk of loss?",
        opts: [
            "The risk of loss remained with the seller because the explicit terms of the destination contract required formal tender at the buyer's physical location.",
            "The buyer, because the risk of loss legally transferred the exact moment the seller duly tendered the goods to the independent commercial carrier.",
            "The shipping carrier, due to strict absolute liability for all weather-related transit failures.",
            "The risk is split equally under comparative commercial fault."
        ],
        ans: 0,
        exp: "When a contract specifies 'FOB [Buyer's Destination]', it is a destination contract. Under UCC § 2-509, the risk of loss in a destination contract does not pass to the buyer until the goods are properly tendered to the buyer at the specified destination. Since the truck was destroyed before reaching the warehouse, the seller bears the risk."
    },
    {
        id: 10,
        topic: "Performance / Impracticability (Identified Goods)",
        fp: "Music Store contracts to purchase 1,000 customized guitars from Manufacturer. The contract states: 'FOB Buyer's Warehouse.' Manufacturer loads the guitars onto an independent commercial trucking carrier. One mile from the buyer's warehouse, the truck is struck by lightning and the guitars are destroyed.\n\nAssume the guitars were uniquely custom-built with the buyer's proprietary logo, rendering them irreplaceable. The lightning strike destroyed them entirely.",
        q: "Is the seller liable for breach of contract for failing to deliver the guitars?",
        opts: [
            "Yes, because a seller always bears the strict risk of loss until physical delivery is executed.",
            "No, because the goods were specifically identified to the contract at the time it was made, and their total destruction without fault completely discharges the seller's duty to perform.",
            "Yes, because the manufacturer could theoretically construct a secondary batch of identical custom instruments.",
            "No, because customized goods are exempt from the Uniform Commercial Code."
        ],
        ans: 1,
        exp: "Under UCC § 2-613, if a contract requires goods identified when the contract is made (like unique, custom-built guitars), and the goods suffer casualty without fault of either party BEFORE the risk of loss passes to the buyer, the seller's performance is excused under the doctrine of impossibility/impracticability. They are not required to build new ones."
    },
    {
        id: 11,
        topic: "Performance / Risk of Loss (FOB Shipping Point)",
        fp: "Music Store contracts to purchase 1,000 customized guitars from Manufacturer. The contract states: 'FOB Buyer's Warehouse.' Manufacturer loads the guitars onto an independent commercial trucking carrier. One mile from the buyer's warehouse, the truck is struck by lightning and the guitars are destroyed.\n\nAssume instead the contract stated 'FOB Seller's Plant.' The lightning struck the truck immediately after it left the plant.",
        q: "Who bears the risk of loss in this modified scenario?",
        opts: [
            "The seller, because they retained legal title until the goods crossed state lines.",
            "The shipping company, because carriers are held strictly liable for all acts of God.",
            "The buyer bears the risk of loss because the risk legally transferred the exact moment the seller duly tendered the goods to the independent commercial carrier.",
            "The seller, because the lightning strike occurred within a one-mile radius of the commercial facility."
        ],
        ans: 2,
        exp: "Under UCC § 2-509, in a shipment contract designated 'FOB Seller's place of business' (FOB Seller's Plant), the risk of loss passes to the buyer as soon as the seller duly delivers the goods to the common carrier. Because the lightning struck after the carrier took possession, the Buyer bears the risk and must pay for the ruined guitars."
    },
    // FACT PATTERN 5 (Q12-Q14)
    {
        id: 12,
        topic: "Third Parties / Intended Donee Beneficiary",
        fp: "Aunt promises to pay University $20,000 for her Nephew's tuition if University guarantees his admission. University admits him. Nephew is completely unaware of this contractual arrangement.",
        q: "What is Nephew's legal status regarding the contract between Aunt and University?",
        opts: [
            "Incidental beneficiary, possessing no right to enforce the commercial agreement.",
            "Intended creditor beneficiary, because the primary purpose was to discharge a legal obligation.",
            "A direct promisee to the underlying financial transaction.",
            "The Nephew is classified as an intended donee beneficiary because the Aunt's primary subjective motive was to confer a gratuitous financial gift upon him rather than to satisfy a debt."
        ],
        ans: 3,
        exp: "A third party is an intended beneficiary if the contract was made with the primary intent to benefit them. Because Aunt's explicit purpose was to confer a gift (tuition payment) rather than to discharge a legal debt owed to Nephew, he is classified as an intended donee beneficiary."
    },
    {
        id: 13,
        topic: "Third Parties / Promisor Defenses Against Beneficiary",
        fp: "Aunt promises to pay University $20,000 for her Nephew's tuition if University guarantees his admission. University admits him. Nephew is completely unaware of this contractual arrangement.\n\nAssume Nephew later discovers the contract. However, Aunt's $20,000 check bounces due to insufficient funds. University refuses to let Nephew attend classes. Nephew sues University.",
        q: "Will Nephew prevail against University?",
        opts: [
            "The University will prevail because a promisor in a third-party beneficiary contract may assert any valid defense against the beneficiary that it could assert against the original promisee.",
            "The Nephew will prevail because the third-party beneficiary is an innocent actor immune from upstream financial disputes.",
            "The University will prevail because educational commitments are inherently unassignable.",
            "The Nephew will prevail because the debt transfer is entirely severable from the underlying consideration failure."
        ],
        ans: 0,
        exp: "In a third-party beneficiary contract, the promisor (University) can raise any defense against the beneficiary (Nephew) that the promisor would have had against the promisee (Aunt). Because Aunt materially breached the contract by providing a bad check, University's duty to perform is excused, even against Nephew."
    },
    {
        id: 14,
        topic: "Third Parties / Vesting of Beneficiary Rights",
        fp: "Aunt promises to pay University $20,000 for her Nephew's tuition if University guarantees his admission. University admits him. Nephew is completely unaware of this contractual arrangement.\n\nBefore Nephew ever learns of the arrangement, Aunt loses her job and mutually agrees with University to cancel the contract.",
        q: "Was the cancellation legally valid?",
        opts: [
            "No, because the physical admission of the student irrevocably vested his legal rights.",
            "The cancellation is legally valid because the contracting parties possess the absolute right to rescind the agreement until the beneficiary's rights have legally vested through knowledge and reliance.",
            "No, because third-party beneficiaries inherently maintain absolute standing immediately upon formation.",
            "Yes, but only if the cancellation was formally approved by a judicial officer."
        ],
        ans: 1,
        exp: "The original contracting parties can modify or cancel a contract without the third-party beneficiary's consent UNTIL the beneficiary's rights have 'vested.' Rights vest when the beneficiary learns of and assents to the contract, relies on it, or brings suit. Since Nephew didn't even know about the contract, his rights hadn't vested, and the cancellation was valid."
    },
    // FACT PATTERN 6 (Q15-Q17)
    {
        id: 15,
        topic: "Third Parties / Delegation of Personal Services",
        fp: "Famous Surgeon contracts to perform a highly complex, specialized heart bypass on Patient for $100,000. Surgeon gets overbooked and delegates the duty to perform the surgery to Colleague, who is another equally famous, equally skilled surgeon. Patient objects.",
        q: "Is the delegation legally valid?",
        opts: [
            "Yes, because commercial medical duties are generally freely delegable to equally credentialed peers.",
            "Yes, provided Colleague utilizes the exact same medical equipment.",
            "The delegation is legally invalid without the patient's explicit consent because the contract involves highly specialized personal skills, professional judgment, and unique fiduciary trust.",
            "No, because all medical delegations require formal notarized authorization."
        ],
        ans: 2,
        exp: "Duties are generally delegable without the obligee's consent unless the duties involve highly specialized personal skill, unique judgment, or special trust/reputation (like a famous surgeon performing a complex bypass). In such cases, the obligee has a substantial interest in having the specific person perform, rendering the duty non-delegable."
    },
    {
        id: 16,
        topic: "Third Parties / Assignment of Rights (Anti-Assignment Clause)",
        fp: "Famous Surgeon contracts to perform a highly complex, specialized heart bypass on Patient for $100,000. Surgeon gets overbooked and delegates the duty to perform the surgery to Colleague, who is another equally famous, equally skilled surgeon. Patient objects.\n\nAssume Surgeon performs the surgery perfectly herself. She then assigns her right to receive the $100,000 payment to Local Bank. The contract states: 'No assignments of this contract are permitted.'",
        q: "Is the assignment of the payment right to the bank valid?",
        opts: [
            "No, because the underlying contract involved highly specialized personal services.",
            "No, because the contract explicitly and unambiguously prohibited all assignments.",
            "Yes, but only if the bank agrees to indemnify the patient.",
            "The assignment is entirely valid and enforceable because standard anti-assignment clauses are construed strictly as destroying the right to assign, rather than the power to assign the receipt of monetary funds."
        ],
        ans: 3,
        exp: "A general clause stating 'no assignments permitted' is construed as merely a promise not to assign. While assigning it is a technical breach of that promise, the assignment itself remains valid and enforceable (destroying the 'right' to assign, but not the 'power'). Furthermore, the right to receive money is overwhelmingly favored as freely assignable."
    },
    {
        id: 17,
        topic: "Third Parties / Voiding Assignments",
        fp: "Famous Surgeon contracts to perform a highly complex, specialized heart bypass on Patient for $100,000. Surgeon gets overbooked and delegates the duty to perform the surgery to Colleague, who is another equally famous, equally skilled surgeon. Patient objects.\n\nAssume the contract clause instead explicitly stated: 'Any assignment of rights under this contract shall be completely VOID.' Surgeon assigns the payment right to Local Bank anyway.",
        q: "What is the legal effect of this specific clause on the Bank's rights?",
        opts: [
            "The assignment is rendered legally ineffective because the specific term 'void' successfully destroys the underlying power of assignment.",
            "It has no effect, because anti-assignment clauses are unconstitutional in medical transactions.",
            "The bank can still collect the funds, but the patient can sue the bank for breach of contract.",
            "The assignment would only be void if the surgeon failed to complete the medical procedures prior to the banking transfer."
        ],
        ans: 0,
        exp: "If a contract clause explicitly states that any assignment is 'void' or 'invalid,' courts will enforce it strictly. Such language destroys the actual 'power' to assign, meaning any attempted assignment is legally ineffective, and the assignee (Bank) acquires no rights."
    },
    // FACT PATTERN 7 (Q18-Q20)
    {
        id: 18,
        topic: "Remedies / Lost Volume Seller (UCC 2-708(2))",
        fp: "High-volume retail Boat Dealer sells standard, mass-produced speedboats. Buyer signs a contract to purchase a speedboat for $50,000. Buyer breaches and refuses to pay. Boat Dealer immediately resells the exact same boat to another customer for $50,000. Boat Dealer has a massive warehouse with an unlimited supply of these exact speedboats.",
        q: "Is Boat Dealer entitled to recover damages from Buyer despite reselling the boat for the identical price?",
        opts: [
            "No, because the dealer successfully mitigated the damages and suffered zero actual financial loss.",
            "The retailer is entitled to recover the expected lost profit from the breached transaction under the lost volume seller doctrine.",
            "No, because double recovery is strictly prohibited under the commercial code.",
            "Yes, but the recovery is strictly limited to nominal damages and court filing fees."
        ],
        ans: 1,
        exp: "Under UCC § 2-708(2), if the standard measure of damages is inadequate to put the seller in as good a position as performance would have done, a 'lost volume seller' (one with unlimited supply) can recover their lost profit. Had Buyer not breached, Boat Dealer would have sold TWO boats and made TWO profits, not one."
    },
    {
        id: 19,
        topic: "Remedies / Expectation Damages (Standard Seller)",
        fp: "High-volume retail Boat Dealer sells standard, mass-produced speedboats. Buyer signs a contract to purchase a speedboat for $50,000. Buyer breaches and refuses to pay. Boat Dealer immediately resells the exact same boat to another customer for $50,000. Boat Dealer has a massive warehouse with an unlimited supply of these exact speedboats.\n\nAssume instead that the seller was just a private individual selling his own personal, used boat on Craigslist. Buyer breaches. The individual resells the boat the next day to someone else for the exact same $50,000 price.",
        q: "What amount of expectation damages can the private individual recover from the breaching buyer?",
        opts: [
            "$50,000.",
            "The full expected profit margin.",
            "The individual recovers nothing because the successful mitigation completely erased any expectation damages, restoring him to his precise anticipated financial position.",
            "Punitive damages for bad faith breach."
        ],
        ans: 2,
        exp: "A private individual selling a single item is NOT a lost volume seller. They only had one boat to sell. Because they successfully resold it for the exact same contract price, they suffered zero expectation damages (contract price minus resale price = $0). They are fully made whole."
    },
    {
        id: 20,
        topic: "Remedies / Restitution of Deposit (Breaching Buyer)",
        fp: "High-volume retail Boat Dealer sells standard, mass-produced speedboats. Buyer signs a contract to purchase a speedboat for $50,000. Buyer breaches and refuses to pay. Boat Dealer immediately resells the exact same boat to another customer for $50,000. Boat Dealer has a massive warehouse with an unlimited supply of these exact speedboats.\n\nAssume Buyer had paid a $10,000 deposit on a $100,000 custom machine from a different Seller. Buyer breaches. Seller incurred exactly $1,000 in actual damages due to the breach. Buyer sues Seller to get the deposit back.",
        q: "How much of the deposit is Buyer legally entitled to recover?",
        opts: [
            "$0, because breaching parties forfeit all rights to restitution.",
            "$10,000, because deposits are automatically considered punitive.",
            "$5,000, splitting the difference in equity.",
            "The buyer is entitled to restitution of the deposit minus the seller's actual damages, preventing the unjust enrichment of the non-breaching party."
        ],
        ans: 3,
        exp: "Even if a party willfully breaches a contract, modern courts allow the breaching party to recover restitution for the benefit they conferred on the non-breaching party (the deposit), MINUS the actual damages caused by the breach. (Some UCC formulas allow the seller to keep 20% or $500 as a statutory baseline if damages are unprovable, but here actual damages are exactly $1,000, so Buyer recovers $9,000)."
    },
    // FACT PATTERN 9 (Q21-Q23)
    {
        id: 21,
        topic: "Performance / Substantial Performance (Willful Breach)",
        fp: "Contractor is building a house for Owner. The contract specifications strictly require the use of 'Brand X' copper pipes. Contractor realizes 'Brand Y' copper pipes are $1 cheaper per unit, though identical in quality and durability. To spite the Owner and save money, Contractor willfully and maliciously uses Brand Y pipes. Owner discovers this and refuses to pay the final $100,000 installment.",
        q: "Is Contractor entitled to the final payment under the doctrine of substantial performance?",
        opts: [
            "Yes, because the pipes were identical in quality, resulting in zero diminution in value.",
            "The builder's willful and malicious deviation from the contractual specifications precludes the application of the substantial performance doctrine, constituting a material breach.",
            "Yes, but only after replacing the pipes at his own expense.",
            "No, because the perfect tender rule applies to all construction materials."
        ],
        ans: 1,
        exp: "The doctrine of substantial performance (which normally prevents forfeiture for minor, immaterial defects) generally requires that the breach be INNOCENT or trivial. A deliberate, willful, and malicious breach of the contract specifications is almost always deemed a 'material breach,' precluding the builder from recovering under the contract."
    },
    {
        id: 22,
        topic: "Performance / Express Conditions",
        fp: "Contractor is building a house for Owner. The contract specifications strictly require the use of 'Brand X' copper pipes. Contractor realizes 'Brand Y' copper pipes are $1 cheaper per unit, though identical in quality and durability. To spite the Owner and save money, Contractor willfully and maliciously uses Brand Y pipes. Owner discovers this and refuses to pay the final $100,000 installment.\n\nAssume instead that the contract explicitly stated: 'It is an EXPRESS CONDITION of payment that ONLY Brand X pipes are used.' Contractor accidentally and innocently uses Brand Y pipes. Owner refuses to pay.",
        q: "Must Owner pay the final installment?",
        opts: [
            "Yes, under the doctrine of substantial performance.",
            "Yes, because the pipes were identical in quality.",
            "Because an express condition mandates strict compliance, the builder's failure to utilize the exact specified materials technically excuses the owner's duty to pay, though equitable avoidance of forfeiture may apply.",
            "No, because express conditions invoke the perfect tender rule for services."
        ],
        ans: 2,
        exp: "Unlike constructive conditions (which are satisfied by substantial performance), express conditions (using magic words like 'expressly conditioned on') require strict, literal compliance. Innocent failure to strictly comply technically excuses the other party's performance, though modern courts will sometimes excuse an express condition to prevent a grossly disproportionate forfeiture."
    },
    {
        id: 23,
        topic: "Performance / Divisible Contracts",
        fp: "Contractor is building a house for Owner. The contract specifications strictly require the use of 'Brand X' copper pipes. Contractor realizes 'Brand Y' copper pipes are $1 cheaper per unit, though identical in quality and durability. To spite the Owner and save money, Contractor willfully and maliciously uses Brand Y pipes. Owner discovers this and refuses to pay the final $100,000 installment.\n\nAssume instead the contract was to build 5 identical storage sheds for $10,000 each (totaling $50,000). Builder perfectly builds 3 sheds, but then unjustifiably abandons the job and refuses to build the last 2.",
        q: "Is Builder entitled to any payment under the contract?",
        opts: [
            "No, because abandoning the job constitutes a material breach of the entire agreement.",
            "Yes, but only under quasi-contractual restitution.",
            "No, because construction contracts are inherently indivisible under common law.",
            "The contract is legally divisible, meaning the builder is entitled to the contract price for the three completed units, subject to an offset for damages caused by the breach of the remaining two."
        ],
        ans: 3,
        exp: "If a contract's performance can be divided into matching pairs of part performance and corresponding part payment (e.g., 5 distinct sheds for $10k each), the contract is 'divisible.' The breaching party can recover the contract price for the severable, completed portions, minus any damages caused by their failure to complete the rest."
    },
    // FACT PATTERN 10 (Q24-Q25)
    {
        id: 24,
        topic: "Performance / Anticipatory Repudiation Elements",
        fp: "Manufacturer promises to deliver 1,000 commercial engines to Buyer on December 1. On November 1, Manufacturer calls Buyer and states, 'I am really struggling with my suppliers right now. I might be late delivering next month.'",
        q: "Did Manufacturer anticipatorily repudiate the contract?",
        opts: [
            "This statement does not constitute an anticipatory repudiation because it lacks the clear, unequivocal, and absolute refusal to perform required by commercial law.",
            "Yes, because expressing any degree of severe commercial doubt immediately operates as a total breach.",
            "Yes, because the seller explicitly communicated an impending delay.",
            "No, because anticipatory repudiation only applies to common law service contracts."
        ],
        ans: 0,
        exp: "An anticipatory repudiation occurs when a party explicitly and unequivocally declares they will not or cannot perform their contractual obligations. Mere expressions of doubt or potential difficulty ('I might be late') do not constitute a clear and unequivocal repudiation."
    },
    {
        id: 25,
        topic: "Performance / Demand for Assurances",
        fp: "Manufacturer promises to deliver 1,000 commercial engines to Buyer on December 1. On November 1, Manufacturer calls Buyer and states, 'I am really struggling with my suppliers right now. I might be late delivering next month.'\n\nNervous about the November 1 phone call, Buyer immediately sends a written demand for adequate assurances. Manufacturer completely ignores the demand for 30 days.",
        q: "What is the legal result of Manufacturer ignoring the demand?",
        opts: [
            "It constitutes a mutual rescission.",
            "The seller's complete failure to respond to a justified demand for assurances within thirty days legally transforms the initial ambiguity into a formal anticipatory repudiation.",
            "It has no legal effect until the December 1 deadline expires.",
            "It forces the buyer to accept a late delivery."
        ],
        ans: 1,
        exp: "Under UCC § 2-609, if a party has reasonable grounds for insecurity (like hearing 'I might be late'), they may demand adequate assurances in writing. The failure of the other party to provide such assurances within a reasonable time (not exceeding 30 days) is legally treated as an anticipatory repudiation of the contract."
    }
];