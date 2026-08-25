const examData = [
    {
        id: 1,
        topic: "Formation / Offer vs. Invitation to Deal",
        fp: "Store places an advertisement in the local newspaper stating: '10 Brand New 65-inch Televisions Left! Only $100 each! First come, first served. Saturday at 8:00 AM.' Buyer is the first person in line on Saturday at 8:00 AM, holding $100. Store manager refuses to sell the TV to Buyer, claiming the advertisement was merely an invitation to deal.",
        q: "Did the advertisement constitute a valid legal offer?",
        opts: [
            "Yes, because it was clear, definite, explicit, and left nothing open for negotiation.",
            "No, because newspaper advertisements are universally construed strictly as solicitations for subsequent offers.",
            "No, because the store manager did not sign a formal commitment.",
            "Yes, because the commercial pricing fell beneath the UCC threshold."
        ],
        ans: 0,
        exp: "Generally, advertisements are considered invitations to deal. However, an exception exists if the ad is clear, definite, explicit, leaves nothing open for negotiation, and identifies a specific offeree or limits the class of offerees (e.g., 'first come, first served'). The store's ad meets this standard and constitutes a valid offer."
    },
    {
        id: 2,
        topic: "Formation / Unilateral Contracts (Reward)",
        fp: "Owner loses his dog and posts flyers around town offering a $500 reward for its return. Finder, who never saw or heard of the flyers, finds the dog wandering and uses the tag on its collar to return it to Owner. Later that day, a neighbor tells Finder about the $500 reward. Finder goes back to Owner and demands the money.",
        q: "Is Owner legally obligated to pay Finder the reward?",
        opts: [
            "Yes, because Finder fully completed the requested performance.",
            "No, because a unilateral contract cannot be formed if the offeree performs without prior knowledge of the specific offer.",
            "Yes, under the doctrine of quasi-contract and unjust enrichment.",
            "No, because the reward was not held open in writing."
        ],
        ans: 1,
        exp: "A reward poster is an offer for a unilateral contract, which is accepted by full performance. However, mutual assent requires the offeree to act IN RESPONSE to the offer. If a person performs without knowing of the reward offer, they cannot subsequently claim it because their performance was not an acceptance of that offer."
    },
    {
        id: 3,
        topic: "Formation / Revocation of Unilateral Offer",
        fp: "Owner tells Painter, 'I will pay you $500 if you paint my garage by tomorrow.' This offer clearly seeks acceptance by performance only. Painter buys the necessary paint, arrives at the garage, and begins scraping the old paint off the walls. Two hours later, Owner comes outside and says, 'I revoke my offer.' Painter finishes the job anyway.",
        q: "Was Owner's revocation legally effective?",
        opts: [
            "Yes, because unilateral offers can be revoked at any time prior to absolute completion.",
            "Yes, because buying the paint was merely preliminary preparation.",
            "No, because starting performance creates an implied option contract that holds the offer open for a reasonable time to complete the work.",
            "No, because verbal revocations are inherently invalid against commercial artisans."
        ],
        ans: 2,
        exp: "Under modern contract law (Restatement 2d § 45), once an offeree begins actual performance on a unilateral contract, it creates an implied option contract. The offeror's power to revoke is suspended, and the offeree must be given a reasonable opportunity to complete performance."
    },
    {
        id: 4,
        topic: "Defenses / Statute of Frauds (Real Estate)",
        fp: "Seller and Buyer agree orally on the phone that Seller will sell his farm, Blackacre, to Buyer for $100,000. Buyer immediately wires a $10,000 down payment. Buyer has not moved onto the land or made any improvements. A week later, Seller gets a better offer and refuses to close the deal, returning the $10,000.",
        q: "If Buyer sues to enforce the sale, will the Statute of Frauds bar enforcement?",
        opts: [
            "No, because the electronic transfer of a down payment fully satisfies the required evidentiary threshold.",
            "Yes, because all contracts exceeding five hundred dollars must be executed via formal written documentation.",
            "No, because oral agreements between private individuals are exempt from the statute.",
            "Yes, because this is an oral contract for the sale of an interest in land, which must be in a signed writing."
        ],
        ans: 3,
        exp: "The Statute of Frauds requires contracts for the sale of an interest in land to be in writing and signed by the party against whom enforcement is sought. Payment of a portion of the purchase price, standing alone, is insufficient to overcome the SOF under the part performance doctrine."
    },
    {
        id: 5,
        topic: "Defenses / Part Performance Exception to SOF",
        fp: "Seller and Buyer agree orally on the phone that Seller will sell his farm, Blackacre, to Buyer for $100,000. Buyer immediately wires a $10,000 down payment. Buyer has not moved onto the land or made any improvements. A week later, Seller gets a better offer and refuses to close the deal, returning the $10,000.\n\nAssume instead that after paying the $10,000, Buyer moved onto Blackacre and built a $50,000 barn on the property with Seller's knowledge. Seller then tries to back out.",
        q: "Under this modified scenario, is the oral contract enforceable?",
        opts: [
            "Yes, the doctrine of part performance removes the oral land contract from the Statute of Frauds when the buyer takes possession, pays a portion of the price, and makes valuable improvements.",
            "No, because improvements to real estate cannot substitute for a formal signature.",
            "Yes, but only under federal agricultural regulations.",
            "No, because the original agreement was strictly verbal."
        ],
        ans: 0,
        exp: "An oral contract for the sale of land can be removed from the Statute of Frauds under the 'part performance' doctrine. Courts generally require two of the following three elements to establish part performance: (1) payment of all or part of the purchase price, (2) taking possession, and (3) making substantial improvements. Buyer did all three."
    },
    {
        id: 6,
        topic: "Defenses / Economic Duress",
        fp: "Supplier has a binding contract to provide specialized gears to Manufacturer for $10 each. The day before a massive, critical shipment is due, Supplier calls Manufacturer and says, 'I will not deliver the gears unless you sign an amendment agreeing to pay $15 each.' Manufacturer cannot find substitute gears in time, and failing to receive the shipment will bankrupt Manufacturer. Manufacturer signs the amendment. Supplier delivers the gears.",
        q: "Is the amendment raising the price to $15 enforceable?",
        opts: [
            "Yes, because the manufacturer formally signed the amendment.",
            "No, because the amendment was obtained through economic duress, as the manufacturer had no reasonable alternative and faced immediate financial ruin.",
            "Yes, because commercial pricing modifications are strictly governed by the UCC firm offer rule.",
            "No, because the gears were non-conforming."
        ],
        ans: 1,
        exp: "Economic duress renders a contract (or modification) voidable. It occurs when one party makes an improper or wrongful threat (like a bad-faith threat to breach an existing contract) that leaves the victim with no reasonable alternative but to agree, causing severe economic harm. The Manufacturer had no alternative and faced bankruptcy, establishing duress."
    },
    {
        id: 7,
        topic: "Defenses / Undue Influence",
        fp: "Nurse serves as the full-time, live-in caretaker for Patient, an isolated and highly susceptible 90-year-old man. Over several weeks, Nurse constantly pressures Patient, telling him his family doesn't care about him and that he should sell Nurse his $1,000,000 house for $100,000. Worn down by the isolation and pressure, Patient signs the contract.",
        q: "What is Patient's best defense to void the sale of the house?",
        opts: [
            "Unilateral mistake.",
            "Fraud in the execution.",
            "Undue influence, which renders the contract voidable because a dominant party unfairly persuaded a susceptible party within a confidential relationship.",
            "Lack of formal consideration."
        ],
        ans: 2,
        exp: "Undue influence occurs when a dominant party exerts unfair persuasion over a susceptible party (often in a confidential or fiduciary relationship, like a caretaker and an isolated elder), overcoming their free will. This renders the resulting contract voidable by the victim."
    },
    {
        id: 8,
        topic: "Terms / Parol Evidence (Condition Precedent to Formation)",
        fp: "Buyer and Seller sign a completely integrated written contract for the sale of a used sports car for $15,000. Before signing, Buyer told Seller, 'I am signing this now, but we agree this contract only takes effect if my bank approves my $15,000 loan tomorrow.' Seller agreed. The bank denied the loan. Seller sues Buyer for breach.",
        q: "Can Buyer introduce parol evidence of the oral agreement regarding the bank loan?",
        opts: [
            "No, because the written contract was completely integrated, barring all prior oral conditions.",
            "Yes, because vehicle sales automatically incorporate financing contingencies.",
            "No, because the Parol Evidence Rule strictly prohibits contradicting the final written price term.",
            "Yes, because parol evidence is admissible to show a condition precedent to the formation or existence of the contract."
        ],
        ans: 3,
        exp: "The Parol Evidence Rule generally bars prior oral agreements that contradict a written contract. However, an exception exists for oral agreements establishing a condition precedent to the *formation* or effectiveness of the entire contract. Showing that the contract wasn't supposed to exist until the loan was approved is admissible."
    },
    {
        id: 9,
        topic: "Terms / Parol Evidence (Explaining Ambiguity)",
        fp: "Farmer and Chef sign a contract for the delivery of '100 pounds of premium chicken.' When Farmer delivers older, tougher stewing hens, Chef rejects them, claiming 'premium chicken' in the culinary industry exclusively refers to young, tender broilers. The contract does not define 'premium chicken.'",
        q: "Can Chef introduce extrinsic evidence of trade usage to define 'premium chicken'?",
        opts: [
            "Yes, because extrinsic evidence is always admissible to explain or interpret an ambiguous term.",
            "No, because the Parol Evidence Rule forbids clarifying plain English vocabulary.",
            "No, because 'chicken' is universally defined by statutory agricultural standards.",
            "Yes, but only if the contract lacks a formal signature."
        ],
        ans: 0,
        exp: "Even when a contract is fully integrated, the Parol Evidence Rule does not bar extrinsic evidence (such as trade usage, course of dealing, or prior negotiations) introduced solely to explain or interpret the meaning of an ambiguous term in the writing."
    },
    {
        id: 10,
        topic: "Terms / UCC Parol Evidence (Course of Dealing/Trade Usage)",
        fp: "Merchant A and Merchant B have done business for 5 years. They sign a new, completely integrated written contract containing a strict merger clause for the sale of steel. The contract says nothing about delivery methods. A ships the steel via train, but B rejects it, claiming that in their prior 50 transactions (course of dealing), A always delivered via truck.",
        q: "Under the UCC, is evidence of their prior course of dealing admissible to supplement the contract?",
        opts: [
            "No, because the presence of a strict merger clause conclusively prohibits the introduction of supplemental shipping details.",
            "Yes, because the UCC freely allows course of dealing or trade usage to explain or supplement even completely integrated written agreements.",
            "No, because standard commercial logistics are determined entirely by the seller's discretion.",
            "Yes, provided the total contractual value is beneath five hundred dollars."
        ],
        ans: 1,
        exp: "Under UCC § 2-202, even if a written contract is completely integrated (with a merger clause), it may ALWAYS be explained or supplemented by course of dealing, usage of trade, or course of performance, unless the written terms specifically negate them."
    },
    {
        id: 11,
        topic: "Formation / Battle of the Forms (Knockout Rule)",
        fp: "Company A sends a purchase order to Company B for chemicals. The order states: 'Disputes shall be litigated in New York courts.' Company B responds with an acknowledgment accepting the order, but its form states: 'Disputes shall be litigated in California courts.' B ships the chemicals, and A uses them. A dispute arises.",
        q: "Under the UCC 'knockout rule' utilized by most jurisdictions for differing terms, where will the dispute be litigated?",
        opts: [
            "In New York, because the offeror is universally deemed the master of the contract.",
            "In California, because the last document sent controls the agreement.",
            "Neither specific term controls; the conflicting terms cancel each other out, and the court will use UCC gap-fillers or standard jurisdictional rules.",
            "Federal court, because interstate commercial disputes immediately invoke federal question jurisdiction."
        ],
        ans: 2,
        exp: "When forms exchanged between merchants contain DIFFERENT (conflicting) terms rather than merely additional terms, most courts apply the 'knockout rule.' The conflicting terms cancel each other out and are dropped from the contract. The gap is then filled by applicable UCC provisions or standard common law."
    },
    {
        id: 12,
        topic: "Formation / UCC § 2-207 (Expressly Conditional Acceptance)",
        fp: "Company A sends a purchase order to Company B for 100 gears. Company B responds with an acknowledgment form that states: 'Acceptance is expressly made conditional on your assent to our warranty disclaimer.' Company A receives the form but says nothing. B ships the gears, and A accepts and uses them.",
        q: "Did B's acknowledgment form constitute a valid written acceptance under UCC § 2-207(1)?",
        opts: [
            "Yes, because between merchants, any written response operates as an acceptance.",
            "Yes, because the disclaimer merely supplemented the original terms.",
            "No, because a conditional acceptance strictly violates the statute of frauds.",
            "No, the writing is considered a counteroffer, not an acceptance; however, a contract was formed subsequently by the parties' conduct when A accepted the shipped goods."
        ],
        ans: 3,
        exp: "Under UCC § 2-207(1), a definite expression of acceptance operates as an acceptance EVEN IF it contains additional terms, UNLESS acceptance is expressly made conditional on assent to the additional terms. Because B included that magic language, the form was a counteroffer. A contract was formed later by conduct under § 2-207(3) when A accepted the goods."
    },
    {
        id: 13,
        topic: "Third Parties / Intended Creditor Beneficiary",
        fp: "Alice owes Bob $500. To pay off this debt, Alice contracts with Charlie to paint Charlie's house in exchange for Charlie paying the $500 directly to Bob. Charlie agrees.",
        q: "What is Bob's legal status regarding the contract between Alice and Charlie?",
        opts: [
            "An intended creditor beneficiary.",
            "An incidental beneficiary.",
            "A direct promisee to the agreement.",
            "An intended donee beneficiary."
        ],
        ans: 0,
        exp: "A third party is an intended beneficiary if the contract was made with the primary intent to benefit them. If the purpose of the promisee (Alice) in obtaining the promisor's (Charlie's) promise is to discharge a legal obligation owed to the third party (Bob), the third party is a creditor beneficiary."
    },
    {
        id: 14,
        topic: "Third Parties / Vesting of Beneficiary Rights",
        fp: "Alice owes Bob $500. To pay off this debt, Alice contracts with Charlie to paint Charlie's house in exchange for Charlie paying the $500 directly to Bob. Charlie agrees.\n\nBefore Bob ever learns about this agreement, Alice and Charlie mutually agree to cancel the contract.",
        q: "Can Bob sue Charlie to enforce the payment of the $500?",
        opts: [
            "Yes, because a creditor beneficiary possesses absolute enforcement rights instantly upon contract formation.",
            "No, because the original contracting parties retained the right to modify or cancel the agreement since Bob's rights had not yet legally vested.",
            "Yes, because the cancellation constitutes fraudulent conveyance.",
            "No, because third-party beneficiaries entirely lack legal standing in civil courts."
        ],
        ans: 1,
        exp: "The original contracting parties can modify or cancel a contract without the third-party beneficiary's consent UNTIL the beneficiary's rights have 'vested.' Rights vest when the beneficiary learns of and assents to the contract, relies on it, or brings suit. Since Bob didn't even know about the contract, his rights hadn't vested."
    },
    {
        id: 15,
        topic: "Third Parties / Defenses Against Beneficiary",
        fp: "Alice owes Bob $500. To pay off this debt, Alice contracts with Charlie to paint Charlie's house in exchange for Charlie paying the $500 directly to Bob. Charlie agrees.\n\nAssume Bob knows of the contract. Alice paints Charlie's house, but uses terrible, defective paint that ruins the exterior, committing a material breach. Charlie refuses to pay Bob the $500.",
        q: "If Bob sues Charlie for the $500, will Bob win?",
        opts: [
            "Yes, because Bob is an innocent third party immune to service disputes.",
            "Yes, because the debt transfer is entirely severable from the painting duties.",
            "No, because the promisor can assert any defenses against the third-party beneficiary that they could have asserted against the promisee.",
            "No, because Alice was an unlicensed contractor."
        ],
        ans: 2,
        exp: "In a third-party beneficiary contract, the promisor (Charlie) can raise any defense against the beneficiary (Bob) that the promisor would have had against the promisee (Alice). Because Alice materially breached the contract by ruining the house, Charlie's duty to pay is excused, even against Bob."
    },
    {
        id: 16,
        topic: "Third Parties / Assignment Restrictions (UCC)",
        fp: "Small Bakery has a requirements contract with Flour Mill, where Flour Mill agrees to supply all the flour Small Bakery needs for one year. Small Bakery uses about 100 pounds a week. Halfway through the year, Small Bakery sells its business and assigns its rights under the contract to Mega-Factory, a massive industrial bakery that uses 10,000 pounds of flour a week. Flour Mill refuses to supply Mega-Factory.",
        q: "Is the assignment to Mega-Factory valid?",
        opts: [
            "Yes, because assignments are universally favored and cannot be restricted.",
            "Yes, provided Mega-Factory pays in advance.",
            "No, because commercial flour supplies are considered unique personal services.",
            "No, because assigning a requirements contract to a party with vastly different requirements materially alters the duty and burden of the obligor."
        ],
        ans: 3,
        exp: "Under UCC § 2-210, an assignment of rights is invalid if it would materially change the duty of the other party, increase the burden/risk imposed on them, or impair their chance of obtaining return performance. Assigning a requirements contract from a small shop to a massive factory drastically alters the Mill's burden, making the assignment invalid."
    },
    {
        id: 17,
        topic: "Third Parties / Delegation of Personal Services",
        fp: "Famous Artist is hired by Patron for $50,000 to paint a highly detailed, personalized family portrait. Artist gets busy and delegates the duty to paint the portrait to his talented apprentice, who is equally skilled. Patron refuses to accept the apprentice's work.",
        q: "Was the delegation of the painting duty valid?",
        opts: [
            "No, because the contract involves distinct personal skill and judgment, making the duties non-delegable without the obligee's consent.",
            "Yes, because the apprentice was objectively verified to be equally skilled.",
            "No, because all delegations must strictly satisfy the statute of frauds.",
            "Yes, because artists retain absolute creative authority under the UCC."
        ],
        ans: 0,
        exp: "Duties are generally delegable. However, an exception exists for contracts involving specialized personal skill, artistic judgment, or unique trust (like painting a personalized portrait). In such cases, the obligee (Patron) has a substantial interest in having the specific person perform, so the duty cannot be delegated without consent."
    },
    {
        id: 18,
        topic: "Third Parties / Liability After Delegation",
        fp: "Painter contracts to paint Owner's ordinary wooden fence for $500. This is standard labor. Painter delegates the physical work to his friend, Dave. Owner agrees to let Dave paint. Dave does a terrible job, using the wrong color and ruining the fence.",
        q: "Who is liable to Owner for breach of contract?",
        opts: [
            "Only Dave, because the physical delegation cleanly transferred all legal obligations.",
            "Both Painter and Dave, because delegating a duty does not relieve the delegating party of their original contractual liability unless there is a formal novation.",
            "Only Painter, because Dave lacked direct privity.",
            "Neither, because standard fence painting lacks specific performance guarantees."
        ],
        ans: 1,
        exp: "A valid delegation of duties does NOT relieve the original obligor (Painter) of liability. The obligor remains secondarily liable as a surety if the delegate (Dave) fails to perform properly. To completely escape liability, there must be a 'novation'—an agreement among all three parties releasing the original obligor."
    },
    {
        id: 19,
        topic: "Performance / Express Conditions",
        fp: "Developer agrees to buy a specific parcel of commercial land from Owner for $1,000,000. The written contract states: 'Buyer's duty to purchase the land is expressly conditioned upon Buyer obtaining a commercial zoning permit for the property by June 1.' Developer applied for the permit, but the city council delayed the hearing and did not grant the permit until June 2.",
        q: "Is Developer legally obligated to buy the land?",
        opts: [
            "Yes, because the delay was minor.",
            "Yes, under the doctrine of substantial performance.",
            "No, because the express condition precedent was not strictly satisfied by the specified deadline, excusing Developer's duty to perform.",
            "No, because the city council possessed sovereign immunity."
        ],
        ans: 2,
        exp: "An 'express condition' (created by words like 'expressly conditioned upon') requires strict, absolute compliance. If the condition does not occur exactly as specified (by June 1), the party protected by the condition (Developer) is excused from their duty to perform (buying the land)."
    },
    {
        id: 20,
        topic: "Performance / Prevention of Condition",
        fp: "Developer agrees to buy a specific parcel of commercial land from Owner for $1,000,000. The written contract states: 'Buyer's duty to purchase the land is expressly conditioned upon Buyer obtaining a commercial zoning permit for the property by June 1.' Developer applied for the permit, but the city council delayed the hearing and did not grant the permit until June 2.\n\nAssume instead that Developer changed his mind about buying the land in May. To ensure he didn't get the permit by June 1, Developer secretly withdrew his zoning application.",
        q: "Under this scenario, must Developer buy the land?",
        opts: [
            "No, because the condition ultimately failed to occur.",
            "Yes, but only if the Owner specifically sues for specific performance.",
            "No, because real estate transactions enforce strict liability deadlines.",
            "Yes, the condition is legally excused under the prevention doctrine, because a party cannot rely on the failure of a condition that they themselves wrongfully prevented from occurring in bad faith."
        ],
        ans: 3,
        exp: "Under the prevention doctrine, if a party whose duty is subject to a condition wrongfully (in bad faith) prevents or hinders the occurrence of that condition, the condition is legally excused. The party must then perform as if the condition had been satisfied."
    },
    {
        id: 21,
        topic: "Performance / Constructive Conditions of Exchange",
        fp: "Contractor agrees to build a detached garage for Homeowner for $10,000. The contract specifies all the building details but says absolutely nothing about when payment is due.",
        q: "Under common law constructive conditions, when is Homeowner required to pay the $10,000?",
        opts: [
            "Payment is due strictly upon the completion of the contractor's performance.",
            "Fifty percent is due upfront, and fifty percent upon completion.",
            "Payment is due before the contractor begins work.",
            "Payment is due in monthly installments."
        ],
        ans: 0,
        exp: "When a contract is silent on the timing of payment, the common law applies constructive conditions of exchange. The rule is that the party whose performance takes a period of time (Contractor building the garage) must fully perform BEFORE the party whose performance can be rendered in an instant (Homeowner paying money) is required to perform."
    },
    {
        id: 22,
        topic: "Remedies / Consequential Damages (Foreseeability)",
        fp: "Miller runs a flour mill. The main crank shaft breaks, halting all production. Miller hires Carrier to transport the broken shaft to an engineer for repair. Carrier negligently delays delivery by 5 days. As a result, Miller's mill is shut down for 5 extra days, losing $50,000 in profits. Carrier had no idea the mill was shut down or that Miller didn't have a spare shaft.",
        q: "Can Miller recover the $50,000 in lost profits from Carrier?",
        opts: [
            "Yes, because the carrier's direct negligence caused the delay.",
            "No, because the consequential damages were not foreseeable to the carrier at the time the contract was formed, as the special circumstances were not communicated.",
            "Yes, because lost profits are the standard measure of direct expectation damages.",
            "No, because the amount is too speculative."
        ],
        ans: 1,
        exp: "This is the classic rule from Hadley v. Baxendale. Consequential damages (like lost profits) are only recoverable if they were reasonably foreseeable to the breaching party at the time the contract was made. Because Carrier did not know the mill was shut down or lacked a spare, the lost profits were not foreseeable."
    },
    {
        id: 23,
        topic: "Remedies / Restitution for Breaching Party",
        fp: "Buyer agrees to buy a house from Seller for $100,000. Buyer pays a $10,000 down payment. Two months later, Buyer unjustifiably breaches the contract and refuses to close. Seller immediately finds a new buyer and sells the house for $105,000. Seller suffers no actual financial damages from the breach.",
        q: "Can Buyer recover the $10,000 down payment?",
        opts: [
            "No, because breaching parties forfeit all rights to restitution.",
            "No, because the down payment is automatically considered punitive liquidated damages.",
            "Yes, to prevent the unjust enrichment of the seller, minus any actual damages the seller suffered (which are zero here).",
            "Yes, but only through a federal bankruptcy proceeding."
        ],
        ans: 2,
        exp: "Even if a party willfully breaches a contract, modern courts allow the breaching party to recover restitution for the benefit they conferred on the non-breaching party, MINUS the damages caused by the breach. Because Seller suffered $0 damages (and actually made $5k more), letting Seller keep the $10,000 would be unjust enrichment."
    },
    {
        id: 24,
        topic: "Performance / Impracticability (Destruction of Identified Source)",
        fp: "Farmer contracts to sell 1,000 bushels of corn to Buyer. The contract specifically states the corn must be harvested 'exclusively from Farmer's North Field.' A massive, unexpected drought completely destroys the crop in the North Field.",
        q: "Is Farmer liable for breach of contract for failing to deliver the corn?",
        opts: [
            "Yes, because agricultural contracts enforce absolute strict liability.",
            "Yes, because Farmer could have easily purchased replacement corn on the open market.",
            "No, because the drought was an act of God.",
            "No, because the specific source identified in the contract was destroyed without fault, rendering performance objectively impossible."
        ],
        ans: 3,
        exp: "If a contract requires goods to be sourced from a specifically identified source (e.g., 'Farmer's North Field'), and that source fails or is destroyed through no fault of the seller, performance is excused under the doctrine of impossibility/impracticability. Farmer is not required to buy substitute corn."
    },
    {
        id: 25,
        topic: "Performance / Impracticability (Personal Services Death)",
        fp: "Lead Singer of a famous rock band signs a contract to perform a solo acoustic set at a wealthy fan's wedding for $100,000. The day before the wedding, Lead Singer contracts a severe throat infection and completely loses his voice. The band offers to send their equally talented backup singer instead, but the fan refuses.",
        q: "Is Lead Singer liable for breach of contract?",
        opts: [
            "Yes, because illness does not legally justify terminating a commercial performance.",
            "No, because the contract involved unique personal services and performance is excused due to unforeseen medical incapacity.",
            "Yes, because the failure to provide a suitable substitute prior to the deadline constitutes a material breach.",
            "No, because wedding performances are entirely exempt from expectation damages."
        ],
        ans: 1,
        exp: "When a contract requires the unique personal services of a specific individual (like a famous singer), the unforeseen death or severe incapacitating illness of that specific person renders performance objectively impossible. The duty to perform is excused, and no substitute is required."
    }
];