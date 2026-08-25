const examData = [
    // FACT PATTERN 1 (Q1-Q3)
    {
        id: 1,
        topic: "Formation / UCC 2-207 (Material Alteration)",
        fp: "TechCo emails an offer to supply 10,000 specific microchips at $10 each to BuildCorp. The offer says nothing about warranties. BuildCorp sends a purchase order acceptance that is definite and seasonable, but includes a fine-print clause stating: 'All implied warranties of merchantability are hereby completely disclaimed.' TechCo receives the acceptance and ships the chips without reading the fine print. The chips are defective.",
        q: "Is the disclaimer of merchantability enforceable against BuildCorp?",
        opts: [
            "Yes, because under the mirror image rule, shipping the physical goods constitutes absolute acceptance of all counteroffer terms.",
            "No, because implied warranties cannot be disclaimed under the Uniform Commercial Code.",
            "No, because between merchants, a disclaimer of the implied warranty of merchantability materially alters the contract, meaning the term drops out and the UCC gap-filler remains.",
            "Yes, because TechCo failed to object to the additional term within ten days of receiving the written acknowledgment form."
        ],
        ans: 2,
        exp: "Under UCC § 2-207(2), between merchants, additional terms in an acceptance become part of the contract UNLESS they materially alter it. A disclaimer of the implied warranty of merchantability is universally considered a material alteration. Therefore, the disclaimer does not become part of the contract, and the standard UCC implied warranty applies."
    },
    {
        id: 2,
        topic: "Formation / UCC 2-207 (Expressly Conditional Acceptance)",
        fp: "TechCo emails an offer to supply 10,000 specific microchips at $10 each to BuildCorp. The offer says nothing about warranties. BuildCorp sends a purchase order acceptance that is definite and seasonable, but includes a fine-print clause stating: 'All implied warranties of merchantability are hereby completely disclaimed.' TechCo receives the acceptance and ships the chips without reading the fine print. The chips are defective.\n\nAssume instead that TechCo's original email offer stated: 'Acceptance is expressly conditioned on your assent to all terms herein, and no additional terms will be accepted.'",
        q: "What is the legal effect of BuildCorp's response containing the disclaimer?",
        opts: [
            "It constitutes a valid acceptance, but the disclaimer is severed from the final agreement.",
            "It operates as a rejection and counteroffer because the offer explicitly limited acceptance to its exact terms.",
            "It forms a binding option contract.",
            "It invokes the knockout rule, canceling out the conflicting warranty provisions."
        ],
        ans: 1,
        exp: "Under UCC § 2-207(2)(a), if an offer expressly limits acceptance to the terms of the offer, any additional or different terms proposed by the offeree in their acceptance automatically fail to become part of the contract, and if the offeree makes their acceptance expressly conditional on those new terms, it is a counteroffer."
    },
    {
        id: 3,
        topic: "Defenses / Statute of Frauds (Merchant Confirmatory Memo)",
        fp: "TechCo emails an offer to supply 10,000 specific microchips at $10 each to BuildCorp. The offer says nothing about warranties. BuildCorp sends a purchase order acceptance that is definite and seasonable, but includes a fine-print clause stating: 'All implied warranties of merchantability are hereby completely disclaimed.' TechCo receives the acceptance and ships the chips without reading the fine print. The chips are defective.\n\nSuppose the entire original agreement was made orally over the phone. Immediately after hanging up, BuildCorp sent a signed email stating: 'Confirming our order for 10,000 chips at $10 each.' TechCo did not reply or sign anything, but later tried to back out, claiming the Statute of Frauds.",
        q: "Does the Statute of Frauds bar BuildCorp from enforcing the oral agreement?",
        opts: [
            "No, because under the merchant's confirmatory memo exception, TechCo's failure to object to the signed email within 10 days satisfies the writing requirement against them.",
            "Yes, because the contract price exceeds five hundred dollars, strictly mandating the signature of the party against whom enforcement is sought.",
            "No, because electronic communications are inherently exempt from traditional commercial statutes.",
            "Yes, because the original telephone conversation lacked independent consideration."
        ],
        ans: 0,
        exp: "Under UCC § 2-201(2), between merchants, if one party sends a written confirmation of the oral agreement within a reasonable time, it satisfies the Statute of Frauds against the recipient UNLESS the recipient objects in writing within 10 days. Since TechCo did not object, the oral contract is enforceable."
    },
    // FACT PATTERN 2 (Q4-Q5)
    {
        id: 4,
        topic: "Third Parties / Delegation of Personal Services",
        fp: "Landowner contracts with Architect to draft highly specialized, custom blueprints for a unique avant-garde mansion for $15,000. The contract states: 'No assignments permitted.' Architect gets busy and delegates the duty to draft the blueprints to Draftsman, an equally skilled competitor of Architect.",
        q: "Is the delegation of the drafting duty valid?",
        opts: [
            "Yes, because commercial drafting duties are generally freely delegable.",
            "Yes, provided Draftsman possesses identical professional licensing credentials.",
            "No, because the contract specifically involves fungible commercial goods.",
            "No, because drawing custom blueprints involves highly specialized personal artistic skill and judgment, making the duty strictly non-delegable without the obligee's explicit consent."
        ],
        ans: 3,
        exp: "Duties are generally delegable without the obligee's consent unless the duties involve specialized personal skill, artistic judgment, or unique trust/reputation (like an architect drawing custom, avant-garde blueprints). In such cases, the obligee has a substantial interest in having the specific person perform, rendering the duty non-delegable."
    },
    {
        id: 5,
        topic: "Third Parties / Anti-Assignment Clauses",
        fp: "Landowner contracts with Architect to draft highly specialized, custom blueprints for a unique avant-garde mansion for $15,000. The contract states: 'No assignments permitted.' Architect gets busy and delegates the duty to draft the blueprints to Draftsman, an equally skilled competitor of Architect.\n\nAssume Architect drafts the blueprints perfectly himself. He then assigns his right to receive the $15,000 payment to Local Bank to secure a business loan. Landowner refuses to pay the Bank.",
        q: "Is the assignment of the right to receive payment valid despite the contract clause?",
        opts: [
            "Yes, because an anti-assignment clause generally only destroys the right to assign, not the power to assign, and the right to receive money is overwhelmingly favored as freely assignable in commercial law.",
            "No, because the contract explicitly and unambiguously prohibited all assignments.",
            "No, because assigning funds to financial institutions requires explicit prior authorization from the original obligor.",
            "Yes, but only if the Bank formally indemnifies the Landowner against secondary liabilities."
        ],
        ans: 0,
        exp: "A general clause stating 'no assignments permitted' is construed as merely a promise not to assign. While assigning it is a technical breach of that promise, the assignment itself remains valid and enforceable (destroying the 'right' to assign, but not the 'power'). The right to receive money is almost always freely assignable."
    },
    // FACT PATTERN 3 (Q6-Q8)
    {
        id: 6,
        topic: "Terms / Parol Evidence Rule (Complete Integration)",
        fp: "Developer and Contractor sign a completely integrated written contract for the construction of a mall. During negotiations, Contractor orally promised to use 'Grade A' premium steel. The final written contract states: 'Contractor shall use standard structural steel.' Contractor uses standard steel, and Developer sues.",
        q: "Can Developer introduce evidence of the oral promise to use Grade A steel?",
        opts: [
            "Yes, because the oral promise was supported by independent consideration.",
            "No, because the Parol Evidence Rule bars prior oral agreements that contradict the explicit terms of a completely integrated written contract.",
            "Yes, because the oral promise clarifies a patent ambiguity in the written document.",
            "No, because construction contracts are exclusively governed by municipal building codes."
        ],
        ans: 1,
        exp: "The Parol Evidence Rule prohibits the introduction of prior or contemporaneous oral agreements that contradict the terms of a completely integrated written contract (a contract intended as the final and exclusive expression of the agreement). The oral promise to use 'Grade A' steel directly contradicts the written 'standard' steel term."
    },
    {
        id: 7,
        topic: "Terms / Parol Evidence Rule (Condition Precedent)",
        fp: "Developer and Contractor sign a completely integrated written contract for the construction of a mall. During negotiations, Contractor orally promised to use 'Grade A' premium steel. The final written contract states: 'Contractor shall use standard structural steel.' Contractor uses standard steel, and Developer sues.\n\nAssume Developer claims they orally agreed just prior to signing that the contract wouldn't take effect unless Developer secured $5,000,000 in municipal funding. The funding fell through, but Contractor sues Developer to begin construction.",
        q: "Is evidence of this oral agreement regarding municipal funding admissible?",
        opts: [
            "No, because the integration clause creates an irrebuttable presumption of immediate contractual effectiveness.",
            "Yes, because municipalities maintain sovereign immunity over commercial developments.",
            "Yes, because parol evidence is admissible to show a condition precedent to the formation or legal existence of the entire contractual agreement.",
            "No, because financial contingencies must be formally notarized to bypass the Parol Evidence Rule."
        ],
        ans: 2,
        exp: "A widely recognized exception to the Parol Evidence Rule allows a party to introduce evidence of an oral agreement establishing a condition precedent to the FORMATION or effectiveness of the entire contract. Showing that the contract wasn't supposed to exist until funding was secured is admissible."
    },
    {
        id: 8,
        topic: "Terms / Parol Evidence Rule (Fraud Exception)",
        fp: "Developer and Contractor sign a completely integrated written contract for the construction of a mall. During negotiations, Contractor orally promised to use 'Grade A' premium steel. The final written contract states: 'Contractor shall use standard structural steel.' Contractor uses standard steel, and Developer sues.\n\nAssume Developer claims Contractor fraudulently lied about possessing a specialized commercial building license merely to induce Developer to sign the contract.",
        q: "Is evidence of Contractor's fraudulent oral statement admissible?",
        opts: [
            "No, because the merger clause strictly protects commercial contractors from all liability.",
            "Yes, but the remedy is strictly limited to nominal restitution.",
            "No, because the developer failed to conduct a reasonable public records search prior to signing.",
            "Yes, because evidence of fraud, misrepresentation, or duress is a universally recognized exception to the Parol Evidence Rule."
        ],
        ans: 3,
        exp: "While the Parol Evidence Rule bars prior agreements that contradict the writing, evidence of fraud, misrepresentation, or duress is ALWAYS admissible to show that the contract itself is invalid or was induced by deceit, regardless of how completely integrated the writing is."
    },
    // FACT PATTERN 4 (Q9-Q11)
    {
        id: 9,
        topic: "Performance / Risk of Loss (FOB Shipment)",
        fp: "Farmer agrees to sell 5,000 bushels of apples to Grocery, 'FOB Farmer's Silo.' A massive lightning strike burns down the silo completely after the apples were packed, but before the shipping carrier arrived to pick them up.",
        q: "Who bears the risk of loss for the destroyed apples?",
        opts: [
            "The shipping carrier, because transit inherently begins upon the physical packing of the agricultural goods.",
            "The Grocery, because the contract designated the Farmer's silo as the primary commercial origin point.",
            "The Farmer, because under an FOB place of shipment contract, the risk of loss does not pass to the buyer until the seller duly delivers the goods to the designated carrier.",
            "The risk of loss is split equally under the doctrine of comparative commercial fault."
        ],
        ans: 2,
        exp: "Under UCC § 2-509, in a shipment contract designated 'FOB Seller's place of business' (FOB Farmer's Silo), the risk of loss passes to the buyer ONLY when the seller duly delivers the goods to the common carrier. Because the lightning struck before the carrier arrived, the Farmer still bears the risk of loss."
    },
    {
        id: 10,
        topic: "Performance / Risk of Loss (FOB Destination)",
        fp: "Farmer agrees to sell 5,000 bushels of apples to Grocery, 'FOB Farmer's Silo.' A massive lightning strike burns down the silo completely after the apples were packed, but before the shipping carrier arrived to pick them up.\n\nAssume instead the contract stated 'FOB Grocery's Warehouse.' The Farmer handed the apples to the carrier. While in transit, the carrier's truck crashed due to an unavoidable flash flood, destroying the apples.",
        q: "Who bears the risk of loss in this alternate scenario?",
        opts: [
            "The Grocery, because the risk of loss passed the moment the goods were entrusted to the independent carrier.",
            "The Farmer, because in a destination contract, the risk of loss remains entirely with the seller until the goods are properly tendered at the specified destination.",
            "The shipping carrier, due to strict absolute liability for all weather-related transit failures.",
            "The Grocery, provided they had already issued a preliminary down payment."
        ],
        ans: 1,
        exp: "When a contract specifies 'FOB [Buyer's Destination]', it is a destination contract. Under UCC § 2-509, the risk of loss in a destination contract does not pass to the buyer until the goods are properly tendered to the buyer at the specified destination. Since the truck crashed in transit, the Farmer still bears the risk."
    },
    {
        id: 11,
        topic: "Performance / Impracticability (Identified Goods)",
        fp: "Farmer agrees to sell 5,000 bushels of apples to Grocery, 'FOB Farmer's Silo.' A massive lightning strike burns down the silo completely after the apples were packed, but before the shipping carrier arrived to pick them up.\n\nAssume the contract specifically identified 'the 5,000 bushels of apples currently growing in Farmer's North Orchard.' The North Orchard flooded and the crop was destroyed before harvest.",
        q: "Is Farmer liable for breach of contract for failing to deliver the apples?",
        opts: [
            "Yes, because the farmer could have easily purchased replacement apples on the open market.",
            "Yes, because agricultural contracts enforce absolute strict liability.",
            "No, because the destruction of a seller's personal property immediately triggers legal impossibility.",
            "No, because the specific source identified in the contract was destroyed without fault, rendering performance objectively impossible and excusing the duty."
        ],
        ans: 3,
        exp: "If a contract requires goods to be sourced from a specifically identified source (e.g., 'Farmer's North Orchard'), and that source fails or is destroyed through no fault of the seller prior to the risk of loss passing, performance is excused under the doctrine of impossibility/impracticability. Farmer is not required to buy substitute apples."
    },
    // FACT PATTERN 5 (Q12-Q14)
    {
        id: 12,
        topic: "Formation / Promissory Estoppel (Drennan v. Star Paving)",
        fp: "General Contractor (GC) is bidding on a lucrative municipal school project. Subcontractor (Sub) submits a bid to GC to do the electrical work for $50,000. GC relies on Sub's bid to calculate his overall bid and wins the school project. The next day, Sub calls GC and revokes his bid, stating he made a calculation error and needs $70,000 to do the job.",
        q: "Can Sub legally revoke his bid?",
        opts: [
            "No, because the GC foreseeably and detrimentally relied on the subcontractor's bid when securing the primary municipal contract.",
            "Yes, because the bid was merely an unaccepted preliminary offer under traditional common law.",
            "No, because all commercial bids are strictly irrevocable for thirty days under federal statute.",
            "Yes, because numerical calculation errors automatically void commercial agreements."
        ],
        ans: 0,
        exp: "Under the Drennan v. Star Paving doctrine (an application of promissory estoppel), an offer/bid made by a subcontractor to a general contractor becomes irrevocable if the subcontractor should reasonably expect the GC to rely on it, and the GC actually does detrimentally rely on it by using it to win the master contract."
    },
    {
        id: 13,
        topic: "Consideration / Preexisting Duty Rule (Modifications)",
        fp: "General Contractor (GC) is bidding on a lucrative municipal school project. Subcontractor (Sub) submits a bid to GC to do the electrical work for $50,000. GC relies on Sub's bid to calculate his overall bid and wins the school project. The next day, Sub calls GC and revokes his bid, stating he made a calculation error and needs $70,000 to do the job.\n\nAssume GC desperately needs the work done and orally promises to pay Sub the extra $20,000. Sub finishes the work, but GC only pays $50,000.",
        q: "Is the oral modification to pay the extra $20,000 enforceable?",
        opts: [
            "Yes, because the unexpected calculation error constituted a severe, unanticipated difficulty that excused the need for fresh consideration.",
            "Yes, because the GC voluntarily agreed to the new terms to avoid costly commercial delays.",
            "No, because the preexisting duty rule bars enforcement of modifications lacking independent consideration unless severe, unforeseeable difficulties arose, which a simple calculation error does not satisfy.",
            "No, because the modification was not formally notarized."
        ],
        ans: 2,
        exp: "Under common law, modifications require new consideration (the preexisting duty rule). Promising to pay more for work the Sub is already legally bound to do is unenforceable. While an exception exists for 'unforeseen severe difficulties,' a party's own internal calculation error does not qualify as an unforeseen severe difficulty."
    },
    {
        id: 14,
        topic: "Consideration / Preexisting Duty to a Third Party",
        fp: "General Contractor (GC) is bidding on a lucrative municipal school project. Subcontractor (Sub) submits a bid to GC to do the electrical work for $50,000. GC relies on Sub's bid to calculate his overall bid and wins the school project. The next day, Sub calls GC and revokes his bid, stating he made a calculation error and needs $70,000 to do the job.\n\nAssume the School District (a third party) heard about the dispute and directly promised to pay Sub the $20,000 extra if Sub finished the work for GC. Sub finishes the work.",
        q: "Is the School District's promise to pay Sub enforceable?",
        opts: [
            "No, because Sub was already legally bound to finish the work for GC under the original bid.",
            "Yes, because a promise to a third party to perform a preexisting contractual duty owed to another person generally constitutes valid consideration under the Restatement.",
            "No, because municipal entities cannot be held liable for subcontractor disputes.",
            "Yes, but only under the doctrine of strict quasi-contractual restitution."
        ],
        ans: 1,
        exp: "A major exception to the preexisting duty rule occurs when the preexisting duty is owed to a different person. Promising a THIRD PARTY (School District) to perform a duty already owed to a second party (GC) constitutes valid consideration to support the third party's new promise to pay."
    },
    // FACT PATTERN 6 (Q15-Q17)
    {
        id: 15,
        topic: "Performance / UCC Installment Contracts",
        fp: "Buyer orders 12 monthly shipments of 1,000 specific car parts from Seller. Shipment 1 arrives with exactly 990 parts. Buyer notices the shortage and immediately rejects the entire 12-month contract.",
        q: "Was Buyer legally entitled to cancel the entire contract?",
        opts: [
            "No, because under an installment contract, a buyer cannot cancel the entire agreement unless the non-conformity in a specific installment substantially impairs the value of the entire contract, which a 10-part shortage does not.",
            "Yes, under the strict application of the perfect tender rule.",
            "No, because commercial buyers must accept any good-faith effort by the seller regardless of numerical discrepancies.",
            "Yes, provided the buyer files a formal grievance within ten days."
        ],
        ans: 0,
        exp: "The Perfect Tender Rule does not apply to installment contracts under UCC § 2-612. A buyer can only cancel the ENTIRE installment contract if a non-conforming delivery 'substantially impairs the value of the whole contract.' A 10-part shortage out of 12,000 parts clearly does not substantially impair the whole contract."
    },
    {
        id: 16,
        topic: "Performance / Rejecting an Installment",
        fp: "Buyer orders 12 monthly shipments of 1,000 specific car parts from Seller. Shipment 1 arrives with exactly 990 parts. Buyer notices the shortage and immediately rejects the entire 12-month contract.",
        q: "Assuming Buyer cannot cancel the whole contract, can Buyer at least reject the specific 990-part delivery for Month 1?",
        opts: [
            "Yes, because the perfect tender rule allows rejection of any non-conforming delivery, regardless of installment structures.",
            "No, because buyers in long-term contracts waive all rights to inspect individual commercial shipments.",
            "Yes, but only if the seller explicitly refuses to provide a proportional discount.",
            "Only if the shortage substantially impairs the value of that specific installment and cannot be cured."
        ],
        ans: 3,
        exp: "Under UCC § 2-612, a buyer can only reject a specific non-conforming installment if the non-conformity 'substantially impairs the value of that installment' and cannot be cured. A minor shortage can likely be cured by the seller sending 10 more parts, meaning the buyer generally cannot reject the installment."
    },
    {
        id: 17,
        topic: "Performance / Revocation of Acceptance (Latent Defect)",
        fp: "Buyer orders 12 monthly shipments of 1,000 specific car parts from Seller. Shipment 1 arrives with exactly 990 parts. Buyer notices the shortage and immediately rejects the entire 12-month contract.\n\nAssume Shipment 2 arrives conforming. Buyer accepts and stores the parts. Two weeks later, while attempting to install them, Buyer discovers a severe latent defect in the metal alloy that was impossible to see during standard visual inspection. The defect renders the parts useless.",
        q: "Can Buyer revoke his prior acceptance of Shipment 2?",
        opts: [
            "No, because physical acceptance of the goods strictly waives all subsequent rejection rights under the commercial code.",
            "Yes, but only if he returns the goods within forty-eight hours.",
            "Yes, because a buyer may revoke acceptance if a non-conformity substantially impairs the value of the goods and was difficult to discover prior to acceptance.",
            "No, because the risk of latent manufacturing defects permanently shifts to the buyer upon physical delivery."
        ],
        ans: 2,
        exp: "Under UCC § 2-608, a buyer may revoke their prior acceptance of goods if a non-conformity substantially impairs the value of the goods to the buyer AND the acceptance was reasonably induced either by the difficulty of discovery (a latent defect) or by the seller's assurances."
    },
    // FACT PATTERN 7 (Q18-Q20)
    {
        id: 18,
        topic: "Third Parties / Beneficiary Suing Promisee",
        fp: "Uncle promises to pay College $10,000 to cover his Niece's tuition. Niece knows about the arrangement and happily enrolls in classes. A week later, Uncle loses his job and mutually agrees with College to cancel the contract before any payment is made.",
        q: "Can Niece successfully sue Uncle for the $10,000?",
        opts: [
            "Yes, because her physical enrollment in the academic institution irrevocably vested her legal rights.",
            "No, because as a donee beneficiary, she generally possesses no legal right to sue the promisee since there is no underlying debt or independent financial consideration flowing between them.",
            "Yes, because family relationships inherently substitute for formal commercial consideration.",
            "No, because educational contracts are exclusively regulated by federal student loan statutes."
        ],
        ans: 1,
        exp: "While an intended beneficiary can sue the promisor (College), a donee beneficiary generally CANNOT sue the promisee (Uncle) who bought the gift. The promisee simply intended to give a gift, and there is no underlying contract, debt, or consideration flowing between the uncle and niece."
    },
    {
        id: 19,
        topic: "Third Parties / Vesting of Beneficiary Rights",
        fp: "Uncle promises to pay College $10,000 to cover his Niece's tuition. Niece knows about the arrangement and happily enrolls in classes. A week later, Uncle loses his job and mutually agrees with College to cancel the contract before any payment is made.",
        q: "Can Niece successfully sue College to force them to let her attend classes?",
        opts: [
            "Yes, because her explicit knowledge of the contract and detrimental reliance by enrolling caused her third-party rights to legally vest prior to the cancellation.",
            "No, because the original contracting parties retain the absolute, unqualified right to modify or cancel the agreement at any time.",
            "Yes, because the cancellation constitutes illegal academic discrimination.",
            "No, because third-party beneficiaries inherently lack legal standing in civil courts."
        ],
        ans: 0,
        exp: "The original contracting parties can modify or cancel a contract without the third-party beneficiary's consent UNTIL the beneficiary's rights have 'vested.' Rights vest when the beneficiary learns of and assents to the contract, relies on it (by enrolling), or brings suit. Since Niece enrolled, her rights vested, and the cancellation was invalid."
    },
    {
        id: 20,
        topic: "Third Parties / Promisor Defenses",
        fp: "Uncle promises to pay College $10,000 to cover his Niece's tuition. Niece knows about the arrangement and happily enrolls in classes. A week later, Uncle loses his job and mutually agrees with College to cancel the contract before any payment is made.\n\nAssume instead that Uncle's $10,000 check to the College bounced due to insufficient funds. College refuses to let Niece attend.",
        q: "If Niece sues College to attend, will Niece win?",
        opts: [
            "Yes, because the third-party beneficiary is an innocent actor immune from upstream financial disputes.",
            "Yes, because the educational commitment is entirely severable from the underlying consideration failure.",
            "No, because the check was not formally notarized.",
            "No, because the promisor can assert any defenses against the third-party beneficiary that they could have asserted against the promisee, such as the uncle's material breach."
        ],
        ans: 3,
        exp: "In a third-party beneficiary contract, the promisor (College) can raise any defense against the beneficiary (Niece) that the promisor would have had against the promisee (Uncle). Because Uncle materially breached the contract by providing a bad check, College's duty to perform is excused, even against Niece."
    },
    // FACT PATTERN 8 (Q21-Q23)
    {
        id: 21,
        topic: "Remedies / Expectation Damages (Incidental Damages)",
        fp: "Seller contracts to sell a unique antique car to Buyer for $100,000. Buyer breaches the contract and refuses to pay. Seller eventually finds another buyer and sells the exact same car to them for $90,000. However, while waiting to find the new buyer, Seller incurred $2,000 in specialized garage storage fees.",
        q: "If Seller sues Buyer for breach, what total amount of damages should Seller recover?",
        opts: [
            "$10,000.",
            "$12,000, representing the difference between the contract price and resale price, plus incidental damages.",
            "$2,000.",
            "$100,000."
        ],
        ans: 1,
        exp: "Expectation damages aim to put the seller in the position they would have been in. Seller lost $10,000 on the resale ($100k - $90k). Additionally, Seller is entitled to recover incidental damages (commercially reasonable expenses incurred due to the breach, like storage fees). Total = $12,000."
    },
    {
        id: 22,
        topic: "Remedies / Lost Volume Seller (UCC 2-708(2))",
        fp: "Seller contracts to sell a unique antique car to Buyer for $100,000. Buyer breaches the contract and refuses to pay. Seller eventually finds another buyer and sells the exact same car to them for $90,000. However, while waiting to find the new buyer, Seller incurred $2,000 in specialized garage storage fees.\n\nSuppose Seller is a high-volume commercial car dealer who sells hundreds of identical standard sedans. Buyer breaches a contract to buy one sedan for $30,000. Seller immediately resells that exact sedan to another customer for $30,000. Seller has an unlimited supply of these sedans.",
        q: "Is Seller entitled to recover damages from Buyer despite successfully reselling the sedan for the exact same price?",
        opts: [
            "No, because the seller successfully mitigated the damages and suffered zero actual financial loss.",
            "Yes, but the recovery is strictly limited to nominal damages and court filing fees.",
            "Yes, as a 'lost volume seller,' the seller is entitled to the lost profit from the breached sale because they would have made two separate sales and two profits if the buyer hadn't breached.",
            "No, because double recovery is strictly prohibited under the commercial code."
        ],
        ans: 2,
        exp: "Under UCC § 2-708(2), if the standard measure of damages (contract price minus market price) is inadequate to put the seller in as good a position as performance would have done, a 'lost volume seller' (one with unlimited supply) can recover their lost profit. Had Buyer not breached, Seller would have sold two cars and made two profits, not one."
    },
    {
        id: 23,
        topic: "Remedies / Liquidated Damages (Penalty)",
        fp: "Seller contracts to sell a unique antique car to Buyer for $100,000. Buyer breaches the contract and refuses to pay. Seller eventually finds another buyer and sells the exact same car to them for $90,000. However, while waiting to find the new buyer, Seller incurred $2,000 in specialized garage storage fees.\n\nAssume the original contract contained a clause stating: 'If Buyer breaches, Buyer must immediately pay Seller $50,000 as a penalty.'",
        q: "Is this liquidated damages clause enforceable?",
        opts: [
            "Yes, because sophisticated parties freely agreed to the terms.",
            "Yes, because antique vehicles are notoriously difficult to accurately appraise.",
            "No, because it was not explicitly approved by a judicial officer prior to the breach.",
            "No, because the amount is grossly disproportionate to actual damages and explicitly operates as a punitive penalty."
        ],
        ans: 3,
        exp: "Liquidated damages clauses are only enforceable if actual damages were difficult to estimate at formation AND the specified amount is a reasonable forecast of compensatory damages. A $50,000 penalty on a $100,000 car contract is grossly disproportionate to any actual harm (which was $12k), making it an unenforceable penalty clause."
    },
    // FACT PATTERN 9 (Q24-Q25)
    {
        id: 24,
        topic: "Performance / Anticipatory Repudiation Elements",
        fp: "Seller contracts to sell a massive factory to Buyer. Closing is scheduled for December 1. On November 1, Seller calls Buyer and states, 'I am having trouble with the paperwork. I might not be able to close on December 1.' Buyer immediately sues for breach of contract.",
        q: "Did Seller anticipatorily repudiate the contract on November 1?",
        opts: [
            "No, because an anticipatory repudiation requires a clear, unequivocal, and absolute statement of a refusal or inability to perform, rather than a mere expression of doubt or potential difficulty.",
            "Yes, because the seller communicated an explicit delay involving complex commercial real estate logistics.",
            "Yes, because any expression of doubt automatically functions as a total breach of a commercial sales contract.",
            "No, because anticipatory repudiation only applies to common law service contracts, not the sale of real estate."
        ],
        ans: 0,
        exp: "An anticipatory repudiation occurs when a party explicitly and unequivocally declares they will not or cannot perform their contractual obligations prior to the time performance is due. Mere expressions of doubt or potential difficulty ('I might not be able to close') do not constitute a clear and unequivocal repudiation."
    },
    {
        id: 25,
        topic: "Performance / Demand for Assurances",
        fp: "Seller contracts to sell a massive factory to Buyer. Closing is scheduled for December 1. On November 1, Seller calls Buyer and states, 'I am having trouble with the paperwork. I might not be able to close on December 1.' Buyer immediately sues for breach of contract.",
        q: "Since Seller's statement was merely ambiguous, what was Buyer's legally correct course of action upon receiving the November 1 phone call?",
        opts: [
            "Immediately file a lawsuit for total breach of contract and seek specific performance.",
            "Demand adequate assurances of due performance in writing and suspend performance until such assurances are received.",
            "Terminate the contract instantly and seize the seller's commercial assets.",
            "Wait patiently until the December 1 delivery date to observe if the keys physically arrive."
        ],
        ans: 1,
        exp: "Under both common law and the UCC, if a party has reasonable grounds for insecurity regarding the other party's performance (like receiving an expression of doubt), they may demand adequate assurances of performance in writing. If assurances are not provided within a reasonable time, it is treated as a repudiation."
    }
];