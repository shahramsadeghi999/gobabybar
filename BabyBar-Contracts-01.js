const examData = [
    {
        id: 1,
        topic: "Formation / Mailbox Rule",
        fp: "On Monday, Seller mails a signed offer to sell his tractor to Buyer for $1,000, stating 'This offer will remain open until Friday at 5 PM.' On Tuesday, Buyer receives the letter. On Wednesday, Seller finds another buyer and mails a revocation to Buyer. On Thursday morning, Buyer mails an acceptance. On Thursday afternoon, Buyer receives the revocation.",
        q: "Is there a valid contract between Seller and Buyer?",
        opts: [
            "Yes, because the mailbox rule strictly dictates that a mailed offer cannot be revoked once it is received by the offeree.",
            "No, because the revocation was dispatched prior to the physical mailing of the acceptance letter.",
            "Yes, because the acceptance was legally effective upon dispatch on Thursday morning, prior to the receipt of the revocation on Thursday afternoon.",
            "No, because the offeror successfully deposited a valid revocation into the mail system before the acceptance was created."
        ],
        ans: 2,
        exp: "Under the mailbox rule, an acceptance is effective upon dispatch. A revocation is generally only effective upon receipt. Because the buyer dispatched the acceptance (Thursday morning) before receiving the revocation (Thursday afternoon), a valid contract was formed."
    },
    {
        id: 2,
        topic: "Formation / Option Contracts",
        fp: "On Monday, Seller mails a signed offer to sell his tractor to Buyer for $1,000, stating 'This offer will remain open until Friday at 5 PM.' On Tuesday, Buyer receives the letter. On Wednesday, Seller finds another buyer and mails a revocation to Buyer. On Thursday morning, Buyer mails an acceptance. On Thursday afternoon, Buyer receives the revocation.",
        q: "Assuming Seller is not a merchant, was Seller's promise to keep the offer open until Friday legally binding?",
        opts: [
            "No, because the promise to keep the offer open was not supported by any independent consideration from the buyer.",
            "Yes, because it constituted a formal option contract under the objective theory of mutual assent.",
            "No, because offers exceeding five hundred dollars must be kept open for a minimum of ten days.",
            "Yes, because the inclusion of a specific deadline automatically binds the offeror under common law reliance doctrines."
        ],
        ans: 0,
        exp: "Under common law, an offeror can revoke an offer at any time prior to acceptance, even if they promised to keep it open, UNLESS the offeree gives consideration to keep the offer open (creating an option contract)."
    },
    {
        id: 3,
        topic: "Formation / UCC Firm Offer",
        fp: "On Monday, Seller mails a signed offer to sell his tractor to Buyer for $1,000, stating 'This offer will remain open until Friday at 5 PM.' On Tuesday, Buyer receives the letter. On Wednesday, Seller finds another buyer and mails a revocation to Buyer. On Thursday morning, Buyer mails an acceptance. On Thursday afternoon, Buyer receives the revocation.\n\nAssume instead that Seller is a licensed tractor merchant and the tractor is a good.",
        q: "Would Seller's written promise to keep the offer open until Friday be binding without consideration?",
        opts: [
            "No, because merchants are not bound by unilateral promises to sell heavy machinery to non-merchants.",
            "Yes, because all offers to sell tangible goods are legally irrevocable for a maximum of three months.",
            "No, because the Uniform Commercial Code still strictly requires separate financial consideration for an option contract to be legally enforceable.",
            "Yes, under the UCC firm offer rule, a written, signed offer by a merchant assuring it will be held open is irrevocable without consideration."
        ],
        ans: 3,
        exp: "Under UCC 2-205 (the Firm Offer Rule), an offer by a merchant to buy or sell goods in a signed writing which by its terms gives assurance that it will be held open is not revocable, for lack of consideration, during the time stated."
    },
    {
        id: 4,
        topic: "Consideration / Preexisting Duty Rule",
        fp: "Contractor agrees to remodel Homeowner's kitchen for $20,000. Halfway through the project, Contractor discovers solid bedrock behind the drywall that was entirely unforeseeable and will cost an extra $5,000 to remove. Contractor demands an extra $5,000 to finish the job. Homeowner orally agrees. Contractor finishes the remodel, but Homeowner refuses to pay the extra $5,000.",
        q: "Is the oral modification to pay the extra $5,000 enforceable?",
        opts: [
            "No, because the preexisting duty rule strictly invalidates any and all contract modifications that lack fresh, independent financial consideration.",
            "Yes, because the unforeseen discovery of solid bedrock constitutes a severe, unanticipated difficulty that excuses the need for fresh consideration under common law.",
            "No, because modifications to real estate service contracts must explicitly satisfy the Statute of Frauds.",
            "Yes, because the Uniform Commercial Code permits all good-faith modifications without consideration."
        ],
        ans: 1,
        exp: "Under common law, modifications generally require new consideration (the preexisting duty rule). However, a widely recognized exception exists for 'unforeseen difficulties.' When a severe, unanticipated circumstance arises (like unexpected bedrock) that makes performance highly burdensome, a modification is enforceable without new consideration if it is fair and equitable."
    },
    {
        id: 5,
        topic: "Defenses / Statute of Frauds",
        fp: "Contractor agrees to remodel Homeowner's kitchen for $20,000. Halfway through the project, Contractor discovers solid bedrock behind the drywall that was entirely unforeseeable and will cost an extra $5,000 to remove. Contractor demands an extra $5,000 to finish the job. Homeowner orally agrees. Contractor finishes the remodel, but Homeowner refuses to pay the extra $5,000.",
        q: "Does the Statute of Frauds render this oral modification unenforceable?",
        opts: [
            "Yes, because the underlying contract involves an improvement to real property exceeding the five-hundred-dollar threshold.",
            "No, because service contracts that are capable of being fully performed within one year fall outside the Statute of Frauds.",
            "Yes, because any modification that increases the contract price must be memorialized in a signed writing.",
            "No, because the oral modification was proposed by the performing contractor rather than the property owner."
        ],
        ans: 1,
        exp: "The Statute of Frauds requires a writing for certain contracts (e.g., land sales, sale of goods $500+, contracts incapable of being performed within one year). A kitchen remodel is a service contract capable of being performed within a year, so it does not fall under the SOF. The $500 rule applies to goods, not services."
    },
    {
        id: 6,
        topic: "Defenses / Incapacity (Minors)",
        fp: "16-year-old Teen buys a used car from Dealer for $5,000 cash. Teen drives it for 6 months, then gets into an accident that is entirely Teen's fault, totaling the car. Teen returns the wrecked car to Dealer and demands his $5,000 back.",
        q: "Can Teen disaffirm the contract and recover his money?",
        opts: [
            "No, because the purposeful destruction of the vehicle permanently waives the minor's equitable right to void the transaction.",
            "Yes, but the minor is only entitled to recover the salvage value of the wrecked vehicle under the depreciation rule.",
            "Yes, a minor can disaffirm a contract and, in most states, return the property in its current condition to receive a full refund.",
            "No, because an automobile is universally classified as a strict necessity for all emancipated individuals over the age of fifteen."
        ],
        ans: 2,
        exp: "Contracts made by minors are voidable at the option of the minor. In the majority of jurisdictions, a minor can disaffirm the contract, return whatever remains of the consideration (even a wrecked car), and receive a full refund of the purchase price."
    },
    {
        id: 7,
        topic: "Defenses / Incapacity (Necessaries)",
        fp: "16-year-old Teen buys a used car from Dealer for $5,000 cash. Teen drives it for 6 months, then gets into an accident that is entirely Teen's fault, totaling the car. Teen returns the wrecked car to Dealer and demands his $5,000 back.\n\nAssume the jurisdiction categorizes this specific car as a 'necessary' because Teen strictly required it to travel to vital, life-saving medical treatments.",
        q: "How does the car being a 'necessary' alter the outcome?",
        opts: [
            "The minor remains liable for the reasonable value of the automobile under a quasi-contract theory, rather than the original contract price.",
            "The minor cannot disaffirm the contract under any circumstances and must pay the full five-thousand-dollar contract price.",
            "The dealer must refund the entire purchase price but is permitted to retain physical custody of the minor's future earnings.",
            "The contract is absolutely void ab initio, providing no legal remedy for the commercial dealership."
        ],
        ans: 0,
        exp: "When a minor contracts for 'necessaries' (food, shelter, critical medical care, and sometimes transportation for survival), the minor may still disaffirm the express contract, but the merchant can recover the 'reasonable value' of the goods or services provided under a quasi-contract (restitution) theory."
    },
    {
        id: 8,
        topic: "Defenses / Statute of Frauds (UCC Goods)",
        fp: "Manufacturer and Retailer orally agree on the phone that Retailer will buy 500 widgets for $10 each. Manufacturer immediately sends a signed fax stating, 'Confirming our agreement for 500 widgets at $10 each.' Retailer reads the fax but does not reply. Three weeks later, Manufacturer delivers the widgets, but Retailer refuses them, claiming the oral agreement is unenforceable.",
        q: "Does the Statute of Frauds apply to the underlying contract?",
        opts: [
            "No, because transactions conducted orally via telephone are specifically exempted from federal and state commercial statutes.",
            "No, because the goods in question are generic inventory widgets rather than specially manufactured items.",
            "Yes, because all contracts between specialized merchants are strictly governed by the Uniform Commercial Code.",
            "Yes, because the agreement is for the sale of goods for a price of $500 or more."
        ],
        ans: 3,
        exp: "Under UCC § 2-201, a contract for the sale of goods for the price of $500 or more is not enforceable unless there is some writing sufficient to indicate that a contract for sale has been made."
    },
    {
        id: 9,
        topic: "Defenses / UCC Merchant's Confirmatory Memo",
        fp: "Manufacturer and Retailer orally agree on the phone that Retailer will buy 500 widgets for $10 each. Manufacturer immediately sends a signed fax stating, 'Confirming our agreement for 500 widgets at $10 each.' Retailer reads the fax but does not reply. Three weeks later, Manufacturer delivers the widgets, but Retailer refuses them, claiming the oral agreement is unenforceable.",
        q: "Does the fax satisfy the Statute of Frauds against Retailer, even though Retailer never signed it?",
        opts: [
            "No, because the Statute of Frauds strictly requires the signature of the party against whom enforcement is sought.",
            "No, because an electronic fax transmission cannot satisfy the physical writing requirements of the commercial code.",
            "Yes, under the merchant's confirmatory memo rule, the fax binds the recipient because the retailer failed to object in writing within 10 days.",
            "Yes, because any written communication sent after an oral telephone call establishes an irrebuttable presumption of valid mutual assent."
        ],
        ans: 2,
        exp: "Under UCC § 2-201(2) (the merchant's confirmatory memo rule), if both parties are merchants, a written confirmation sent by one party that is sufficient to bind the sender will also bind the recipient IF the recipient has reason to know of its contents and does not object in writing within 10 days."
    },
    {
        id: 10,
        topic: "Defenses / Statute of Frauds (Quantity Limitation)",
        fp: "Manufacturer and Retailer orally agree on the phone that Retailer will buy 500 widgets for $10 each. Manufacturer immediately sends a signed fax stating, 'Confirming our agreement for 500 widgets at $10 each.' Retailer reads the fax but does not reply. Three weeks later, Manufacturer delivers the widgets, but Retailer refuses them, claiming the oral agreement is unenforceable.\n\nAssume instead that the initial phone call was an agreement for 50 widgets. However, Manufacturer made a typo in the fax and accidentally wrote 'Confirming 500 widgets.' Retailer failed to object.",
        q: "To what extent is the contract enforceable?",
        opts: [
            "The contract is enforceable, but only up to the quantity of 50 widgets originally agreed upon.",
            "The contract is fully enforceable for the entire 500 widgets stated in the written fax document.",
            "The contract is entirely void due to a mutual mistake of material fact regarding the underlying inventory count.",
            "The contract is enforceable for 500 widgets, provided the manufacturer grants a commercial discount."
        ],
        ans: 0,
        exp: "A writing (or confirmatory memo) satisfies the UCC Statute of Frauds even if it incorrectly states a term agreed upon. However, the contract is NOT enforceable beyond the quantity of goods actually shown in the writing. Wait, the rule is: it's not enforceable beyond the quantity in the writing. Here the writing says 500. But the *actual agreement* was 50. The SOF removes the bar to enforcement up to 500, but the plaintiff still has to prove the actual contract. If the actual contract was 50, they can only recover for 50."
    },
    {
        id: 11,
        topic: "Terms / Parol Evidence Rule",
        fp: "Landlord and Tenant sign a comprehensive, completely integrated written lease for a commercial space. During negotiations, Landlord orally promised to repair the HVAC system before move-in. The written lease contains a merger clause and explicitly states 'Tenant takes the premises as-is with no warranties regarding HVAC.' Landlord fails to repair the HVAC.",
        q: "If Tenant sues for breach of contract, can Tenant introduce evidence of the prior oral promise?",
        opts: [
            "Yes, because the oral promise was a condition precedent to the formation of the underlying lease agreement.",
            "No, because oral promises made by commercial landlords are barred by the statute of limitations.",
            "Yes, because the tenant's physical possession of the premises establishes detrimental reliance.",
            "No, because the Parol Evidence Rule bars prior oral agreements that contradict the terms of a completely integrated written contract."
        ],
        ans: 3,
        exp: "The Parol Evidence Rule prevents a party from introducing evidence of prior or contemporaneous oral agreements that contradict or modify the terms of a fully integrated written contract. Because the lease is fully integrated and explicitly contradicts the oral promise (stating the HVAC is 'as-is'), the oral evidence is barred."
    },
    {
        id: 12,
        topic: "Terms / PER Exceptions (Fraud)",
        fp: "Landlord and Tenant sign a comprehensive, completely integrated written lease for a commercial space. During negotiations, Landlord orally promised to repair the HVAC system before move-in. The written lease contains a merger clause and explicitly states 'Tenant takes the premises as-is with no warranties regarding HVAC.' Landlord fails to repair the HVAC.\n\nSuppose instead that Tenant claims Landlord fraudulently told Tenant the HVAC was brand new and fully functional simply to induce him to sign the 'as-is' lease.",
        q: "Can Tenant introduce evidence of this fraudulent oral statement?",
        opts: [
            "No, because the presence of a formal merger clause explicitly supersedes all prior allegations of deceptive commercial practices.",
            "Yes, because evidence of fraud or misrepresentation in the inducement is a widely recognized exception to the Parol Evidence Rule.",
            "No, because the 'as-is' clause transfers absolute assumption of risk to the commercial tenant.",
            "Yes, but only if the tenant can produce a secondary written document corroborating the initial deception."
        ],
        ans: 1,
        exp: "While the Parol Evidence Rule bars prior agreements that contradict the writing, evidence of fraud, misrepresentation, or duress is ALWAYS admissible to show that the contract itself is invalid or was induced by deceit, regardless of integration or merger clauses."
    },
    {
        id: 13,
        topic: "Performance / Anticipatory Repudiation",
        fp: "Buyer and Seller contract for the sale of custom machinery to be delivered on October 1. On September 1, Seller emails Buyer: 'I am running behind schedule. I might not be able to deliver on October 1 due to supply chain issues.' Buyer immediately sues for breach of contract on September 2.",
        q: "Did Seller anticipatorily repudiate the contract?",
        opts: [
            "Yes, because the seller communicated an explicit delay involving international supply chain logistics.",
            "Yes, because any expression of doubt automatically functions as a total breach of a commercial sales contract.",
            "No, because an anticipatory repudiation must be a clear, unequivocal, and absolute statement of a refusal or inability to perform.",
            "No, because anticipatory repudiation only applies to common law service contracts, not the sale of goods."
        ],
        ans: 2,
        exp: "An anticipatory repudiation occurs when a party explicitly declares they will not perform their contractual obligations prior to the time performance is due. Mere expressions of doubt or potential difficulty ('I might not be able to deliver') do not constitute a clear and unequivocal repudiation."
    },
    {
        id: 14,
        topic: "Performance / Demand for Assurances (UCC)",
        fp: "Buyer and Seller contract for the sale of custom machinery to be delivered on October 1. On September 1, Seller emails Buyer: 'I am running behind schedule. I might not be able to deliver on October 1 due to supply chain issues.' Buyer immediately sues for breach of contract on September 2.",
        q: "Under the UCC, what is Buyer's proper legal recourse upon receiving the ambiguous September 1 email?",
        opts: [
            "Demand adequate assurances of due performance in writing and suspend performance until such assurances are received.",
            "Immediately file a lawsuit for total breach of contract and seek specific performance.",
            "Terminate the contract instantly and seize the seller's commercial assets.",
            "Wait patiently until the October 1 delivery date to observe if the goods physically arrive."
        ],
        ans: 0,
        exp: "Under UCC § 2-609, if a party has reasonable grounds for insecurity regarding the other party's performance (like receiving an expression of doubt), they may demand adequate assurances of performance in writing. If assurances are not provided within a reasonable time (not exceeding 30 days), it is treated as a repudiation."
    },
    {
        id: 15,
        topic: "Performance / Retraction of Repudiation",
        fp: "Buyer and Seller contract for the sale of custom machinery to be delivered on October 1. On September 1, Seller emails Buyer: 'I am running behind schedule. I might not be able to deliver on October 1 due to supply chain issues.' Buyer immediately sues for breach of contract on September 2.\n\nAssume instead that on September 1, Seller unequivocally stated, 'I absolutely will not deliver.' On September 15, Seller changed his mind and emailed, 'I will deliver on time.'",
        q: "Could Seller effectively retract the repudiation on September 15?",
        opts: [
            "No, because an explicit repudiation instantly and irrevocably terminates the underlying contract.",
            "Yes, provided the buyer has not yet canceled the contract, materially changed their position in reliance, or indicated they consider the repudiation final.",
            "Yes, because merchants possess an absolute, unqualified right to cure any commercial defects prior to the designated deadline.",
            "No, because written communications cannot be retracted via oral or electronic statements."
        ],
        ans: 1,
        exp: "A party who has anticipatorily repudiated a contract may retract that repudiation at any time before performance is due, UNLESS the aggrieved party has materially changed their position in reliance on the repudiation, canceled the contract, or indicated that they consider the repudiation final."
    },
    {
        id: 16,
        topic: "Performance / Express Conditions (Personal Satisfaction)",
        fp: "Owner contracts to pay Painter $5,000 to paint Owner's portrait, 'expressly conditioned on Owner's absolute personal satisfaction with the final portrait.' Painter completes a masterpiece that all art critics praise. However, Owner genuinely, but unreasonably, dislikes the portrait and refuses to pay.",
        q: "Is Owner liable for breach of contract for refusing to pay?",
        opts: [
            "No, because for contracts involving personal taste or aesthetics, a subjective standard of personal satisfaction legally governs the condition.",
            "Yes, because the painter fully completed the work, triggering the doctrine of substantial performance.",
            "Yes, because the objective praise of professional art critics overrides the owner's unreasonable personal dissatisfaction.",
            "No, because the painter assumed the risk of non-payment by agreeing to an unconscionable contractual term."
        ],
        ans: 0,
        exp: "When a contract includes an express condition of satisfaction involving personal aesthetics, taste, or fancy (like painting a portrait), courts apply a SUBJECTIVE standard. As long as the owner's dissatisfaction is genuine and in good faith, they are excused from paying, even if their opinion is objectively unreasonable."
    },
    {
        id: 17,
        topic: "Performance / Express Conditions (Objective Satisfaction)",
        fp: "Owner contracts to pay Painter $5,000 to paint Owner's portrait, 'expressly conditioned on Owner's absolute personal satisfaction with the final portrait.' Painter completes a masterpiece that all art critics praise. However, Owner genuinely, but unreasonably, dislikes the portrait and refuses to pay.\n\nSuppose instead the contract was for painting Owner's commercial warehouse, expressly conditioned on 'Owner's satisfaction.'",
        q: "If Owner genuinely but unreasonably dislikes the commercial paint job, is Owner liable to pay?",
        opts: [
            "No, because all satisfaction clauses are universally judged by the subjective feelings of the paying party.",
            "Yes, because the owner's dissatisfaction was not communicated in a signed writing within thirty days.",
            "No, because the warehouse constitutes real property, invoking the strict compliance doctrine.",
            "Yes, because for contracts involving mechanical utility or commercial fitness, an objective reasonable person standard applies to the satisfaction condition."
        ],
        ans: 3,
        exp: "Unlike personal aesthetic contracts, if a contract involves commercial fitness, mechanical utility, or structural work (like painting a commercial warehouse), courts apply an OBJECTIVE standard. If a reasonable person would be satisfied with the work, the owner must pay, regardless of genuine personal dissatisfaction."
    },
    {
        id: 18,
        topic: "Performance / Waiver of Express Condition",
        fp: "Owner contracts to pay Painter $5,000 to paint Owner's portrait, 'expressly conditioned on Owner's absolute personal satisfaction with the final portrait.' Painter completes a masterpiece that all art critics praise. However, Owner genuinely, but unreasonably, dislikes the portrait and refuses to pay.\n\nUpon seeing the portrait, Owner tells Painter, 'I hate the portrait and am not satisfied, but I'll pay you the $5,000 anyway because you worked hard.' Owner later changes his mind and refuses to pay.",
        q: "Under what doctrine might Painter successfully force Owner to pay?",
        opts: [
            "Promissory estoppel.",
            "Waiver of condition.",
            "Frustration of purpose.",
            "Mutual rescission."
        ],
        ans: 1,
        exp: "A party who is protected by an express condition precedent (like a satisfaction clause) can waive that condition. By expressly stating he would pay despite not being satisfied, Owner voluntarily waived the condition of satisfaction and is now bound to perform."
    },
    {
        id: 19,
        topic: "Third Parties / Intended Beneficiaries",
        fp: "Uncle contracts with Dealership to buy a car for $20,000, explicitly stating in the written contract: 'This car is to be delivered to my niece, Niece, as a graduation gift.' Uncle pays the money, but Dealership refuses to deliver the car.",
        q: "What is Niece's legal status regarding this contract?",
        opts: [
            "Incidental beneficiary, possessing no right to enforce the contract.",
            "Intended creditor beneficiary.",
            "Intended donee beneficiary, because the explicit purpose of the contract was to confer a gift upon her.",
            "Primary promisee."
        ],
        ans: 2,
        exp: "An intended beneficiary is a third party whom the contracting parties intended to benefit. Because the Uncle's explicit purpose was to confer a gift (not to discharge a debt owed to the niece), she is classified specifically as an intended donee beneficiary."
    },
    {
        id: 20,
        topic: "Third Parties / Donee Beneficiary Rights",
        fp: "Uncle contracts with Dealership to buy a car for $20,000, explicitly stating in the written contract: 'This car is to be delivered to my niece, Niece, as a graduation gift.' Uncle pays the money, but Dealership refuses to deliver the car.",
        q: "Can Niece successfully sue Uncle for breach of contract if the Dealership fails to deliver the car?",
        opts: [
            "Yes, because the niece suffered severe emotional distress.",
            "Yes, because third-party beneficiaries maintain universal standing to sue all signatories.",
            "No, because she was not physically present during the transaction.",
            "No, because a donee beneficiary generally has no rights to sue the promisee since there is no underlying debt or consideration between them."
        ],
        ans: 3,
        exp: "An intended beneficiary can sue the promisor (Dealership) who promised to perform for them. However, a donee beneficiary generally CANNOT sue the promisee (Uncle) who bought the gift, because the promisee simply intended to give a gift and there is no underlying contract or consideration flowing between the uncle and niece."
    },
    {
        id: 21,
        topic: "Remedies / Expectation Damages",
        fp: "Manufacturer agrees to build a custom machine for Factory for $100,000. Factory repudiates the contract before Manufacturer starts building. Manufacturer would have spent $80,000 in labor and materials to build it.",
        q: "If Manufacturer sues Factory immediately after the repudiation, what are Manufacturer's expectation damages?",
        opts: [
            "$100,000 (the full contract price).",
            "$20,000 (the expected profit).",
            "$80,000 (the cost of labor and materials).",
            "$0, because the manufacturer had not yet commenced physical construction."
        ],
        ans: 1,
        exp: "Expectation damages are designed to put the non-breaching party in the position they would have been in had the contract been performed. If performed, Manufacturer would have received $100,000 but spent $80,000, leaving a net profit of $20,000. Since they haven't spent the $80,000 yet, awarding the $20,000 profit makes them whole."
    },
    {
        id: 22,
        topic: "Remedies / Expectation Plus Reliance",
        fp: "Manufacturer agrees to build a custom machine for Factory for $100,000. Factory repudiates the contract before Manufacturer starts building. Manufacturer would have spent $80,000 in labor and materials to build it.\n\nSuppose Manufacturer had already spent $10,000 on custom parts that cannot be resold or repurposed when Factory repudiated.",
        q: "Under this scenario, what are Manufacturer's total recoverable damages?",
        opts: [
            "$30,000, representing the expected profit plus the reliance costs already incurred.",
            "$10,000, representing only the out-of-pocket costs.",
            "$20,000, representing only the expected profit.",
            "$100,000, because the repudiation constitutes a total breach."
        ],
        ans: 0,
        exp: "To put the Manufacturer in the position they would have been in had the contract been performed, they must recover their expected net profit ($20,000) PLUS the out-of-pocket costs they already reasonably incurred in reliance on the contract ($10,000) before the breach. Total damages = $30,000."
    },
    {
        id: 23,
        topic: "Remedies / Specific Performance",
        fp: "Manufacturer agrees to build a custom machine for Factory for $100,000. Factory repudiates the contract before Manufacturer starts building. Manufacturer would have spent $80,000 in labor and materials to build it.",
        q: "Can Manufacturer obtain specific performance to force Factory to purchase the machine?",
        opts: [
            "Yes, because custom machinery is unique.",
            "Yes, because the factory committed a bad-faith breach.",
            "No, because specific performance is generally not available to force a buyer to pay money when legal damages are adequate.",
            "No, because the Uniform Commercial Code prohibits equitable remedies in manufacturing disputes."
        ],
        ans: 2,
        exp: "Specific performance is an equitable remedy generally only available when the subject matter of the contract is unique (like land) AND legal remedies (monetary damages) are inadequate. It is almost never granted to force a buyer to simply pay money, because monetary expectation damages are perfectly adequate."
    },
    {
        id: 24,
        topic: "Formation / Consideration (Past Consideration)",
        fp: "Boss promises Employee, 'When you retire next month, I will pay you a pension of $1,000 a month for the rest of your life in recognition of your 30 years of past service.' Employee retires and does not seek other work. Boss pays for one year, then stops.",
        q: "Does Boss's promise have valid consideration?",
        opts: [
            "Yes, because thirty years of continuous employment establishes an implied-in-fact contract.",
            "Yes, because a moral obligation serves as a valid substitute for commercial consideration.",
            "No, because the promise was not memorialized in a formal, notarized written document.",
            "No, because past consideration (services already rendered) is not valid consideration to support a new promise."
        ],
        ans: 3,
        exp: "A core rule of contract law is that 'past consideration is no consideration.' The 30 years of service were already rendered before the promise was made, so they were not bargained for in exchange for the pension promise."
    },
    {
        id: 25,
        topic: "Formation / Promissory Estoppel",
        fp: "Boss promises Employee, 'When you retire next month, I will pay you a pension of $1,000 a month for the rest of your life in recognition of your 30 years of past service.' Employee retires and does not seek other work. Boss pays for one year, then stops.",
        q: "Despite the lack of consideration, under what theory might Employee successfully enforce the pension promise?",
        opts: [
            "Unjust enrichment.",
            "The preexisting duty rule.",
            "Promissory estoppel, because the employee foreseeably and detrimentally relied on the promise by retiring and foregoing other work.",
            "Anticipatory repudiation."
        ],
        ans: 2,
        exp: "Promissory estoppel enforces a promise without consideration if the promisor should reasonably expect it to induce action or forbearance, and the promisee does foreseeably and detrimentally rely on it (e.g., retiring and not seeking other employment), making enforcement necessary to avoid injustice."
    }
];