const examData = [
    {
        id: 1,
        topic: "Acceptance / UCC Accommodation",
        fp: "Buyer sends an order form to Supplier for 500 red coffee mugs at $2 each. Supplier runs out of red mugs and instead ships 500 blue coffee mugs, accompanied by a letter stating: 'We are out of red mugs, but are sending these 500 blue mugs as an accommodation at the same price. Feel free to return them at our expense if they do not work for you.' Buyer immediately files a breach of contract lawsuit.",
        q: "Did Supplier's shipment constitute a breach of contract?",
        opts: [
            "Yes, because under the perfect tender rule, shipping nonconforming goods constitutes an automatic acceptance and simultaneous breach.",
            "No, because shipping nonconforming goods with notice that they are offered as an accommodation operates as a counteroffer rather than an acceptance and breach.",
            "Yes, because accommodation notices must be agreed upon in writing prior to shipment.",
            "No, because the Uniform Commercial Code allows merchants an automatic thirty-day grace period to substitute inventory."
        ],
        ans: 1,
        exp: "Under the UCC, if a seller ships nonconforming goods, that is generally both an acceptance and a breach. However, if the seller notifies the buyer that nonconforming goods are shipped as an accommodation, the shipment serves as a counteroffer rather than an acceptance and breach, which the buyer can freely accept or reject."
    },
    {
        id: 2,
        topic: "Acceptance / Knowledge of Offer (Unilateral Contract)",
        fp: "Owner loses his golden retriever and posts flyers offering a $500 reward for the dog's return. Finder finds the friendly dog wandering in a park with Owner's phone number on its collar. Having never seen the flyers or heard about the reward, Finder calls Owner and returns the dog purely out of civic duty. The next day, a neighbor tells Finder about the $500 reward flyer. Finder demands the $500 from Owner.",
        q: "Is Owner legally obligated to pay Finder the $500 reward?",
        opts: [
            "Yes, because completing the requested performance in a unilateral contract forms a binding contract regardless of intent.",
            "Yes, under the doctrine of quasi-contract restitution to prevent unjust enrichment.",
            "No, because acceptance of an offer is only valid if the offeree knew of the offer before his act of acceptance.",
            "No, because reward posters are classified as illusory promises under common law."
        ],
        ans: 2,
        exp: "Acceptance is only valid if the offeree knew of the offer before his act of acceptance. In a unilateral contract, complete performance only constitutes acceptance if the performing party acted with knowledge of the offer. Because Finder completed the return without knowing of the reward, no contract was formed."
    },
    {
        id: 3,
        topic: "Defenses / Statute of Frauds (Main Purpose Exception)",
        fp: "Contractor agrees to build an office building for Developer. Subcontractor supplies the drywall on credit. When Contractor falls behind on payments, Subcontractor threatens to stop supplying drywall. Knowing that a construction delay will cost him thousands in lost rent, Developer orally calls Subcontractor and promises, 'Keep supplying drywall; if Contractor fails to pay your bill, I will pay it myself.' Subcontractor delivers the drywall, Contractor defaults, and Developer refuses to pay.",
        q: "Is Developer's oral promise enforceable under the Statute of Frauds?",
        opts: [
            "No, because suretyship promises must strictly be in writing signed by the party to be charged.",
            "Yes, under the main purpose exception, because the primary purpose of Developer's promise was to serve his own pecuniary interest in avoiding construction delays.",
            "No, because the promise lacked fresh consideration flowing directly between Developer and Subcontractor.",
            "Yes, because construction contracts are completely exempt from the Statute of Frauds."
        ],
        ans: 1,
        exp: "While suretyship promises generally fall within the Statute of Frauds and require a writing, an exception exists for the 'Main Purpose Exception': If the main purpose of becoming a guarantor/co-signer was for the personal economic benefit of the promisor, the contract does not need to be in writing to be enforceable."
    },
    {
        id: 4,
        topic: "Defenses / Statute of Frauds (Marriage)",
        fp: "Prior to their wedding, Groom orally promises Bride: 'If you agree to marry me, I will transfer 50% ownership of my downtown condo to your name.' Bride agrees and they marry. After the wedding, Groom refuses to put Bride's name on the deed. Bride sues Groom for breach of contract.",
        q: "Is Groom's oral promise enforceable?",
        opts: [
            "Yes, because marriage constitutes valid and sufficient consideration to support a bilateral contract.",
            "No, because contracts where marriage is the consideration fall within the Statute of Frauds and must be in writing to be enforceable.",
            "Yes, because entering into the marriage satisfies the part-performance exception to the Statute of Frauds.",
            "No, because agreements regarding domestic property are governed exclusively by family court equity."
        ],
        ans: 1,
        exp: "A contract is within the Statute of Frauds if it falls within one of the MYLEGS categories, which includes contracts where marriage is the consideration (the 'M' in MYLEGS). Because the promise to transfer the condo was conditioned on marriage and made orally, it is unenforceable under the Statute of Frauds."
    },
    {
        id: 5,
        topic: "Defenses / Statute of Frauds (Goods Already Paid For)",
        fp: "Collector orally agrees over the phone to buy 10 antique silver coins from Dealer for $1,000 ($100 per coin). Collector immediately sends a check for $400, which Dealer deposits. However, Dealer refuses to deliver any coins, arguing the oral transaction violates the $500 Statute of Frauds threshold.",
        q: "To what extent is the oral agreement enforceable against Dealer?",
        opts: [
            "The contract is completely unenforceable because it was for goods over $500 and lacked a signed writing.",
            "The contract is enforceable for the full 10 coins because partial payment removes the entire contract from the Statute of Frauds.",
            "The contract is enforceable only for 4 coins, representing the goods that have already been paid for and accepted.",
            "The contract is enforceable only if Collector sends a merchant's confirmatory memo within 10 days."
        ],
        ans: 2,
        exp: "Under UCC § 2-201(3)(c), contracts for goods where payment has been made and accepted are enforceable without a writing, but only to the extent of the goods for which payment was made and accepted. Because $400 pays for exactly 4 coins at $100 each, the contract is enforceable up to 4 coins."
    },
    {
        id: 6,
        topic: "Defenses / Mental Incapacity",
        fp: "Seller, who suffers from severe dementia and has been formally adjudicated incompetent by a probate court, wanders into a dealership and signs a written contract to purchase a luxury sports car for $80,000. Seller's legal guardian immediately discovers the transaction and notifies the dealership that the contract is void.",
        q: "What is the legal effect of the contract?",
        opts: [
            "The contract is voidable at the option of the dealership.",
            "The contract is fully enforceable because the dealership had no visual notice of the seller's medical condition.",
            "The contract is void as a matter of law because the seller was formally adjudicated mentally incompetent prior to contracting.",
            "The contract is enforceable if the purchase price represented fair market value."
        ],
        ans: 2,
        exp: "Contract enforcement may be defeated if a party lacked mental capacity at the time the contract was made. If a person has been formally adjudicated mentally incompetent by a court, any contract entered into by that person is void as a matter of law (rather than merely voidable)."
    },
    {
        id: 7,
        topic: "Defenses / Undue Influence",
        fp: "Elderly Homeowner relies entirely on her live-in caretaker for food, medication, and transportation. The caretaker persistently pressures Homeowner for weeks, insisting that Homeowner sign over her $300,000 home to the caretaker for $10,000, claiming no one else cares about her. Overwhelmed and fearful of abandonment, Homeowner signs the deed contract. Homeowner later seeks to rescind the sale.",
        q: "Which defense provides Homeowner's strongest argument to rescind the contract?",
        opts: [
            "Undue influence, because a dominant party in a confidential, dependent relationship used excessive persuasion to overcome a vulnerable party's free will.",
            "Unilateral mistake regarding the market value of the real estate.",
            "Mutual mistake of fact.",
            "Failure of a condition precedent."
        ],
        ans: 0,
        exp: "Contract enforcement may be defeated for lack of capacity via undue influence. Undue influence occurs when a dominant party in a position of trust, confidence, or dependence uses excessive pressure or unfair persuasion to induce a vulnerable party into a contract that does not reflect their free will."
    },
    {
        id: 8,
        topic: "Defenses / Economic Duress",
        fp: "Supplier has a binding contract to deliver specialized engine valves to Manufacturer by Friday. Manufacturer has a multimillion-dollar penalty clause on an aerospace contract if assembly is late. On Thursday, knowing Manufacturer has no alternative sources available on short notice, Supplier wrongfully threatens: 'Unless you agree to pay double the contract price immediately, I will not deliver tomorrow.' Desperate to avoid financial ruin, Manufacturer signs the price increase.",
        q: "Can Manufacturer void the modification based on economic duress?",
        opts: [
            "No, because threat of breach of contract never constitutes legal duress in commercial settings.",
            "Yes, because Supplier made an improper, wrongful threat leaving Manufacturer with no reasonable alternative, coercing assent.",
            "No, because the modification was made between commercial merchants under UCC Article 2.",
            "Yes, but only if Supplier is criminally prosecuted for extortion."
        ],
        ans: 1,
        exp: "Duress is a defense to contract enforcement. Economic duress occurs when a party makes an improper or wrongful threat (such as an unlawful refusal to perform) that leaves the victim with no reasonable alternative, forcing them to submit to involuntary contractual terms."
    },
    {
        id: 9,
        topic: "Terms / Warranty Damages Calculation",
        fp: "Farmer buys an industrial tractor from Dealer. Dealer gives an express warranty that the tractor has a heavy-duty transmission. As warranted, the tractor has a fair market value of $50,000. In reality, the tractor is delivered with a standard transmission, giving it a fair market value of only $35,000. Farmer accepts the tractor and sues Dealer for breach of warranty.",
        q: "What is Farmer's basic measure of warranty damages?",
        opts: [
            "$50,000 (the full value as warranted).",
            "$35,000 (the value of the tractor as delivered).",
            "$15,000, which is the difference between the value of the goods as warranted and the value of the goods as delivered.",
            "$0, because accepting the nonconforming tractor waived all monetary remedies."
        ],
        ans: 2,
        exp: "Warranty damages under the UCC are determined by calculating the difference between the value of the goods as warranted and the value of the goods as delivered. Here, $50,000 (value as warranted) minus $35,000 (value as delivered) equals $15,000 in warranty damages."
    },
    {
        id: 10,
        topic: "Terms / Parol Evidence Rule (Reformation Exception)",
        fp: "Buyer and Seller orally agree that Seller will sell his home and 2 valuable antique paintings to Buyer for $400,000. The closing attorney accidentally makes a typographical error in the written agreement, omitting the 2 paintings. Seller notices the drafting error before signing but stays silent. Buyer signs without catching the mistake. Seller later refuses to turn over the paintings, arguing the Parol Evidence Rule bars the prior oral agreement.",
        q: "Can Buyer introduce evidence of the oral agreement in an action for reformation?",
        opts: [
            "No, because the Parol Evidence Rule strictly bars all prior oral terms omitted from a real estate contract.",
            "Yes, because evidence is admissible in an equitable action for reformation to correct a mistake in reducing the agreement to writing.",
            "No, because unilateral drafting errors by closing attorneys cannot be reformed.",
            "Yes, because the Statute of Frauds does not apply to personal property paintings."
        ],
        ans: 1,
        exp: "An exception to the Parol Evidence Rule exists for evidence in an action for reformation. Where a writing fails to reflect the true agreement of the parties due to a clerical mistake, scrivener's error, or unilateral mistake known to the other party, parol evidence is admissible to reform the document."
    },
    {
        id: 11,
        topic: "Defenses / Ambiguous Terms (Neither Party Aware)",
        fp: "Buyer and Seller enter into a sales contract for cotton to arrive on the ship named 'Peerless.' Unbeknownst to either party, there are two different cargo ships named 'Peerless.' Buyer reasonably intends the 'Peerless' arriving in October, while Seller reasonably intends the 'Peerless' arriving in December. Neither party is aware of the ambiguity or the other's meaning. Buyer refuses the December delivery.",
        q: "Is there an enforceable contract between Buyer and Seller?",
        opts: [
            "Yes, the seller's meaning governs because the seller controls the shipping arrangements.",
            "Yes, the buyer's meaning governs under the doctrine of contra proferentem.",
            "No, because if neither party is aware of the ambiguity and they attach materially different meanings, no contract is formed.",
            "Yes, and the court will use UCC gap-fillers to establish a November compromise delivery date."
        ],
        ans: 2,
        exp: "When an agreement contains an ambiguous term and neither party is aware of the ambiguity, enforcement is defeated unless both parties attached the same meaning (the classic *Raffles v. Wichelhaus* Peerless rule). Because there was no mutual assent to the same subject matter, no contract was formed."
    },
    {
        id: 12,
        topic: "Defenses / Ambiguous Terms (Both Parties Aware)",
        fp: "Buyer and Seller contract for the sale of industrial 'Grade A lumber.' At the time of contracting, both parties are fully aware that 'Grade A lumber' has two distinct, conflicting definitions in their regional trade. Both parties know the other attaches a different meaning to the term, yet each secretly assumes their own definition will control in court. They sign the contract.",
        q: "What is the legal effect of the contract?",
        opts: [
            "The buyer's definition controls because the buyer is the payor.",
            "The contract is unenforceable because if both parties are aware of the ambiguity and attach different meanings, there is no meeting of the minds.",
            "The seller's definition controls because the seller is the supplying merchant.",
            "The contract is valid and the court will enforce the average market price definition."
        ],
        ans: 1,
        exp: "Under the rules for interpreting ambiguous terms: If both parties are aware of the ambiguity and attach different meanings, then contract enforcement is defeated unless both attached the same meaning. Since both knew of the ambiguity and intended different definitions, mutual assent is lacking."
    },
    {
        id: 13,
        topic: "Third Party / Gratuitous Assignment (Detrimental Reliance)",
        fp: "Landlord is owed $2,000 in rent by Tenant. Landlord writes a letter to his Nephew stating: 'I assign my right to collect this month's $2,000 rent to you as a gift.' Nephew receives the letter and, in reasonable reliance on the forthcoming money, signs a nonrefundable lease for an art studio. Landlord then attempts to revoke the gift assignment to Nephew.",
        q: "Can Landlord successfully revoke the assignment?",
        opts: [
            "Yes, because gratuitous assignments are always revocable at the assignor's absolute discretion.",
            "No, because a gratuitous assignment may not be revoked if the assignee foreseeably and detrimentally relied on the assignment.",
            "Yes, because assignments of real property rent require consideration to be valid.",
            "No, because an assignment becomes irrevocable the moment it is committed to a writing."
        ],
        ans: 1,
        exp: "While gratuitous assignments (assignments not for value) are generally revocable, exceptions exist: A gratuitous assignment may NOT be revoked if there has been detrimental reliance by the assignee or if the obligor has already performed. Nephew's signing of the lease in reliance makes the assignment irrevocable."
    },
    {
        id: 14,
        topic: "Third Party / Gratuitous Assignment (Completed Performance)",
        fp: "Creditor is owed $500 by Debtor. Creditor tells Friend, 'I assign my right to collect the $500 from Debtor to you as a gift.' Creditor notifies Debtor. Debtor immediately pays the $500 cash to Friend. The next day, Creditor regrets the gift and demands that Friend return the $500.",
        q: "Can Creditor revoke the assignment and recover the money from Friend?",
        opts: [
            "Yes, because gratuitous assignments lack consideration and remain voidable for 30 days.",
            "No, because a gratuitous assignment cannot be revoked once the obligor has already performed.",
            "Yes, because gift transfers between friends are subject to unilateral rescission.",
            "No, because all oral assignments over $100 are converted into assignments for value by operation of law."
        ],
        ans: 1,
        exp: "A gratuitous assignment may not be revoked once the obligor has already performed (paid the assignee). Because Debtor already paid the $500 to Friend, the gratuitous assignment is completed and irrevocable."
    },
    {
        id: 15,
        topic: "Third Party / Effect of Death on Gratuitous Assignment",
        fp: "Uncle assigns his right to collect a $1,000 debt from Tenant to his Niece as a gratuitous gift. Before Tenant pays Niece, and before Niece takes any action in reliance, Uncle suddenly dies. Uncle's estate demands that Tenant pay the $1,000 to the estate.",
        q: "Who is entitled to receive the $1,000 payment from Tenant?",
        opts: [
            "Niece, because rights assigned in writing survive the death of the assignor.",
            "Uncle's estate, because the death of the assignor automatically terminates and revokes a revocable gratuitous assignment.",
            "Niece, because she is an intended donee beneficiary whose rights vested upon notification.",
            "Both Niece and the estate equally under equitable probate distribution."
        ],
        ans: 1,
        exp: "Because a gratuitous assignment is revocable, it is automatically terminated and revoked by operation of law upon the death or bankruptcy of the assignor, provided the assignment had not already become irrevocable through reliance or performance. The estate is entitled to the funds."
    },
    {
        id: 16,
        topic: "Excuses / Mutual Rescission (Executory Requirement)",
        fp: "Painter agrees to paint Homeowner's fence for $500. Painter completely finishes painting the entire fence. Homeowner inspects it and approves. Before Homeowner hands over the $500, Painter says, 'You know what, we're good friends, let's just mutually rescind our agreement; you don't have to pay me.' Homeowner agrees. The next week, Painter changes his mind and sues Homeowner for $500.",
        q: "Was the mutual rescission legally effective to discharge Homeowner's debt?",
        opts: [
            "Yes, because mutual rescission only requires verbal mutual assent between the contracting parties.",
            "No, because a valid mutual rescission requires the contract to be executory on both sides; once one party has fully performed, rescission requires new consideration.",
            "Yes, under the doctrine of gift discharge.",
            "No, because rescissions involving home improvements must satisfy the Statute of Frauds."
        ],
        ans: 1,
        exp: "Both parties are excused from performing if the contract has been mutually rescinded, but a mutual rescission requires consideration (each party giving up their remaining rights) and must take place while the contract is executory on both sides. If one party has fully performed, a mutual agreement to excuse the other requires independent consideration (such as an accord)."
    },
    {
        id: 17,
        topic: "Terms / Modification (Compromise of Honest Dispute)",
        fp: "Architect contracts to design a commercial building for Developer for $20,000. During the project, a genuine, good-faith dispute arises regarding whether the contract included structural engineering blueprints. Developer honestly believes it did; Architect honestly believes it did not. To resolve the dispute without litigation, they agree to modify the fee to $22,000 with Architect providing the blueprints. Developer later refuses to pay the extra $2,000, arguing Architect had a preexisting duty.",
        q: "Is the common law modification enforceable?",
        opts: [
            "No, because the preexisting duty rule bars any price increases in common law service contracts.",
            "Yes, because a common law contract can be modified without new consideration if the modification was a compromise of an honest, good-faith dispute about the legal duty owed.",
            "No, because architectural agreements cannot be modified without court approval.",
            "Yes, because Developer waived the right to dispute the contract under the Parol Evidence Rule."
        ],
        ans: 1,
        exp: "Under common law, modifications generally require consideration. However, an exception exists: A common law contract can be modified without new consideration if the modification was a compromise of an honest, good-faith dispute about the legal duty owed."
    },
    {
        id: 18,
        topic: "Defenses / Unconscionability (Procedural vs Substantive)",
        fp: "Buyer purchases furniture on credit from Store. The contract contains an adhesion clause providing that Store retains title to every piece of furniture ever purchased by Buyer until every item is paid in full, meaning defaulting on a $5 lamp allows Store to repossess $5,000 worth of previously paid-for furniture. The clause was printed in microscopic, illegible text on the back of the receipt.",
        q: "Why is this contract clause unenforceable?",
        opts: [
            "Because it violates the Statute of Frauds regarding consumer credit.",
            "Because it demonstrates both procedural unconscionability (unfair surprise/fine print) and substantive unconscionability (overly harsh/one-sided terms).",
            "Because all repossession clauses are illegal per se under common law.",
            "Because the furniture store breached the implied warranty of merchantability."
        ],
        ans: 1,
        exp: "Unconscionability allows a court to refuse enforcement of a contract or clause. It requires a showing of procedural unconscionability (bargaining unfairness, hidden fine print, adhesion) and substantive unconscionability (overly oppressive, harsh, or one-sided terms, such as cross-collateralization repossessions)."
    },
    {
        id: 19,
        topic: "Excuses / Constructive Conditions of Exchange (Concurrent)",
        fp: "Buyer agrees to buy Seller's car for $5,000 cash, with the contract stating: 'Closing shall take place at noon on Friday.' The contract does not specify who must perform first. On Friday at noon, Buyer demands that Seller hand over the car title before Buyer shows the money. Seller refuses to hand over the title until Buyer tenders the cash. Both claim the other is in breach.",
        q: "Who is in breach of contract?",
        opts: [
            "Seller, because delivery of goods must always precede payment under common law constructive conditions.",
            "Buyer, because payment of funds must always precede transfer of title under the UCC.",
            "Neither, because when performances can be rendered simultaneously, they are constructive concurrent conditions, requiring each party to tender performance to put the other in breach.",
            "Both, resulting in automatic mutual rescission of the transaction."
        ],
        ans: 2,
        exp: "Constructive conditions of exchange dictate the order of performance when the contract is silent. Where performances can be rendered simultaneously (such as exchanging a car title for cash), the duties are constructive concurrent conditions: each party's obligation is conditioned on the other tendering performance at the same time."
    },
    {
        id: 20,
        topic: "Remedies / Lost Volume Seller",
        fp: "Auto Dealer has an unlimited inventory of standard sedans from the factory. Dealer contracts to sell a sedan to Buyer for $30,000, which would yield Dealer a $5,000 profit. Buyer repudiates the contract. The next day, Dealer sells the exact same sedan to another customer for $30,000. Dealer sues Buyer for $5,000 in lost profit. Buyer argues Dealer suffered zero damages because the car was resold at full price.",
        q: "Is Dealer entitled to recover the $5,000 lost profit?",
        opts: [
            "No, because the resale of the vehicle fully mitigated Dealer's damages.",
            "Yes, under the lost volume seller doctrine, because Dealer had an unlimited supply and would have made two sales and two profits but for Buyer's breach.",
            "No, because UCC remedies for vehicle merchants are strictly limited to incidental storage costs.",
            "Yes, but only if Dealer gave Buyer written notice of the resale within 10 days."
        ],
        ans: 1,
        exp: "A lost volume seller is a merchant who has an unlimited supply of goods and can obtain as many units as they can sell. Because the dealer would have made two sales instead of one had the buyer not breached, the resale does not mitigate the loss, and the dealer is entitled to recover the lost profit ($5,000)."
    },
    {
        id: 21,
        topic: "Remedies / Consequential Damages (Hadley v. Baxendale)",
        fp: "Mill Owner contracts with Carrier to deliver a broken crankshaft to an engineering shop for repairs. Carrier negligently delays delivery by two weeks. Because Mill Owner did not have a backup crankshaft, the entire mill was forced to shut down for two weeks, resulting in $50,000 in lost profits. Mill Owner never informed Carrier that the mill had no spare or that a delay would halt all operations.",
        q: "Can Mill Owner recover the $50,000 in lost profits from Carrier?",
        opts: [
            "Yes, because all damages directly resulting from a breach are recoverable as expectation damages.",
            "No, because consequential damages are only recoverable if they were foreseeable to the breaching party at the time the contract was made.",
            "Yes, because common carriers are strictly liable for all commercial business losses.",
            "No, because lost profits are considered speculative damages under contract law."
        ],
        ans: 1,
        exp: "Under the rule of *Hadley v. Baxendale*, consequential (special) damages resulting from a breach are only recoverable if they were foreseeable to the parties at the time of contracting. Because Mill Owner never notified Carrier of the special circumstances, the mill shutdown losses were not foreseeable, barring recovery."
    },
    {
        id: 22,
        topic: "Remedies / Liquidated Damages Validity",
        fp: "City contracts with Contractor to build a bridge for $10,000,000. The contract contains a clause stating: 'If Contractor completes the bridge late, Contractor shall pay City $1,000,000 per day in liquidated damages.' In reality, a one-day delay would only cause City roughly $2,000 in detour management costs. Contractor finishes two days late, and City demands $2,000,000.",
        q: "Is the liquidated damages clause enforceable?",
        opts: [
            "Yes, because parties are free to agree to any financial penalties in commercial contracts.",
            "No, because a liquidated damages clause is invalid as an unenforceable penalty if the amount is unreasonably disproportionate to the anticipated or actual harm.",
            "Yes, because municipal construction contracts are exempt from reasonable forecast tests.",
            "No, because liquidated damages clauses are strictly prohibited under the common law."
        ],
        ans: 1,
        exp: "A liquidated damages clause is enforceable only if: 1) Damages were difficult to estimate at the time of contracting, and 2) The amount stipulated is a reasonable forecast of just compensation for the harm. A clause demanding $1,000,000/day for a $2,000/day actual harm is an invalid penalty and unenforceable."
    },
    {
        id: 23,
        topic: "Third Party / Promisor Defenses Against Beneficiary",
        fp: "Homeowner contracts with Painter to paint his house for $3,000, with the contract explicitly directing Painter: 'Pay $3,000 to my Son upon completion as a gift.' Painter completes the painting. However, Son sues Painter for the $3,000, and Painter proves that Homeowner committed fraud in the inducement during contract formation.",
        q: "Can Painter assert Homeowner's fraud as a defense against Son?",
        opts: [
            "No, because third-party beneficiaries take their rights free of any defenses between the original contracting parties.",
            "Yes, because a promisor may assert against an intended third-party beneficiary any defense that the promisor could have raised against the promisee.",
            "No, because donee beneficiaries are protected by the holder-in-due-course doctrine.",
            "Yes, but only if the son was actively complicit in the father's fraudulent statements."
        ],
        ans: 1,
        exp: "In a third-party beneficiary contract, the promisor (Painter) can assert against the third-party beneficiary (Son) any defense arising out of the contract that the promisor could have asserted against the promisee (Homeowner), including fraud, failure of consideration, or failure of conditions."
    },
    {
        id: 24,
        topic: "Excuses / Impracticability (Death of Necessary Person)",
        fp: "Famous Singer contracts with Concert Hall to perform a live solo vocal performance on New Year's Eve. Two weeks before the concert, Famous Singer unexpectedly dies. Concert Hall sues Famous Singer's estate for breach of contract, demanding expectation damages to cover lost ticket revenue.",
        q: "Is Singer's estate liable for breach of contract?",
        opts: [
            "Yes, because contractual duties to pay damages automatically survive the death of the promisor.",
            "No, because the death of a specific person necessary for performance discharges the contractual duty under the doctrine of impracticability/impossibility.",
            "Yes, because the estate was obligated to delegate the singing duty to a replacement performer.",
            "No, because entertainment contracts are voidable at the option of the executor under the Statute of Frauds."
        ],
        ans: 1,
        exp: "Death or physical incapacity of a person necessary to perform under a personal services contract results in impracticability/impossibility and a complete discharge of that party's performance duty. Because Singer's unique personal performance was required, her death discharges the obligation."
    },
    {
        id: 25,
        topic: "Remedies / Restitution (Unenforceable Contract)",
        fp: "Landlord and Tenant enter into an oral lease for a commercial building for a term of 5 years (which is unenforceable under the Statute of Frauds). Relying on the agreement, Tenant occupies the building for 6 months and pays nothing. Landlord sues to recover rent.",
        q: "Can Landlord recover from Tenant?",
        opts: [
            "No, because the contract is completely void and unenforceable under the Statute of Frauds.",
            "Yes, under the doctrine of restitution (quasi-contract / quantum meruit) to recover the reasonable rental value of the 6 months of occupancy to prevent unjust enrichment.",
            "Yes, for full expectation damages for the entire 5-year lease term.",
            "No, because the landlord was contributorily negligent by failing to draft a written lease."
        ],
        ans: 1,
        exp: "Even if an express contract is unenforceable under the Statute of Frauds, a party who has conferred a benefit (such as providing 6 months of commercial occupancy) is entitled to recover in restitution (quantum meruit) for the reasonable value of the benefit conferred to prevent unjust enrichment."
    }
];