const examData = [
    {
        id: 1,
        topic: "Applicable Law / Mixed Transactions",
        fp: "City hires a renowned muralist to paint a large fresco on the side of the municipal library. The total contract price is $5,000. Of that amount, the specialty paint and brushes will cost the muralist exactly $500. The muralist completes the work, but City refuses to pay, alleging the colors are incorrect. The muralist sues City for breach of contract.",
        q: "Which body of law will the court apply to determine the rights of the parties?",
        opts: [
            "The Uniform Commercial Code (UCC), because the cost of the paint equals exactly $500, triggering the goods threshold.",
            "The common law, because the service of painting the mural predominates the contract over the cost of the goods.",
            "Both the UCC and the common law concurrently, dividing the claims between the paint and the labor.",
            "The common law, because municipal governments are exempt from commercial codes."
        ],
        ans: 1,
        exp: "If the contract contains both goods and services, then the court must determine the governing law by using the mixed transactions factor test. The court weighs whether the goods or services predominate. Here, the $4,500 value of the artist's specialized labor heavily predominates over the $500 cost of the paint, meaning the common law governs."
    },
    {
        id: 2,
        topic: "Formation / Requirements Contract",
        fp: "Bakery approaches Miller, a local flour producer. Bakery states, 'I would like to purchase all the flour we need for our baking operations for the next calendar year from you, at a set price of $10 per bag.' Miller agrees. A month later, Miller refuses to supply the flour, arguing that no valid offer or contract was ever formed because there was no specific quantity term stated.",
        q: "Is Miller's argument correct?",
        opts: [
            "Yes, because under the UCC, a definite quantity term is strictly required for all commercial sales of goods.",
            "No, because the requirement of a quantity term is waived under the common law for agricultural products.",
            "Yes, because the bakery could theoretically require an infinite amount of flour, rendering the contract illusory.",
            "No, because no quantity term is needed if the contract is a requirements contract where the buyer agrees to buy all that it needs in good faith."
        ],
        ans: 3,
        exp: "Generally, an offer in a UCC contract must contain a quantity term. However, no quantity term is needed if the contract is a requirement contract ('buyer gets what buyer needs'). The UCC relies on the assumption that the parties will act in good faith and not demand unreasonably disproportionate amounts, making the offer valid."
    },
    {
        id: 3,
        topic: "Termination / Irrevocable Offers (Firm Offer)",
        fp: "Lumber Merchant sends a signed letter to Builder stating: 'I offer to sell you 1,000 oak planks for $5 each. I assure you this offer will remain open and irrevocable for the next six months.' Builder receives the letter but does not respond. Four months later, Builder calls Lumber Merchant to accept the offer. Lumber Merchant responds, 'Too late, I revoked that offer last week.'",
        q: "Was Lumber Merchant's revocation legally effective?",
        opts: [
            "No, because the written offer explicitly guaranteed it would remain open for six months.",
            "Yes, because under the UCC, a firm offer is only irrevocable for a maximum of 90 days, after which it becomes freely revocable.",
            "No, because the builder detrimentally relied on the merchant's written assurance.",
            "Yes, because the builder failed to provide independent consideration to hold the offer open."
        ],
        ans: 1,
        exp: "A firm offer by a merchant in a signed writing providing assurance it will be held open is irrevocable without consideration. However, under no circumstances shall the firm offer ever be valid for more than 90 days. After 90 days, the offer does not disappear, but it becomes freely revocable. Since four months (120 days) passed, the revocation was valid."
    },
    {
        id: 4,
        topic: "Termination / Rejection (Counteroffer)",
        fp: "Homeowner offers to sell her used dining table to Neighbor for $1,000. Neighbor responds, 'I really like the table, but I'll only pay $900.' Homeowner says, 'No, the price is $1,000.' Neighbor then says, 'Okay, fine. I accept your offer for $1,000.' Homeowner changes her mind and refuses to sell.",
        q: "Is a valid contract formed between Homeowner and Neighbor?",
        opts: [
            "Yes, because the neighbor accepted the exact original terms of the offer.",
            "No, because the neighbor's initial response of $900 acted as a counteroffer, which rejected and terminated the original $1,000 offer.",
            "Yes, because the homeowner's restatement of the $1,000 price automatically renewed the original offer.",
            "No, because contracts between neighbors must be executed in writing to show serious intent to be bound."
        ],
        ans: 1,
        exp: "A counteroffer is created when the terms of the acceptance do not match the terms of the offer. A counteroffer has the dual effect of rejecting the original offer and creating a new offer. Neighbor's $900 response terminated Homeowner's $1,000 offer, meaning Neighbor's subsequent attempt to accept the $1,000 was actually a new offer, not an acceptance."
    },
    {
        id: 5,
        topic: "Formation / Promissory Estoppel",
        fp: "Philanthropist promises to donate $50,000 to Local Charity 'to support your good work.' Relying on this promise, Local Charity immediately signs a binding contract to purchase a new community transport van for $45,000. Philanthropist later suffers financial setbacks and revokes the pledge, pointing out that Local Charity provided no consideration in exchange for the money.",
        q: "Can Local Charity successfully enforce the promise?",
        opts: [
            "No, because a promise to give a charitable gift is completely unenforceable without an exchange of legal detriment.",
            "Yes, under the doctrine of promissory estoppel, because the charity reasonably relied on the promise to its detriment by purchasing the van.",
            "No, because the philanthropist suffered unforeseen financial setbacks, invoking the doctrine of impracticability.",
            "Yes, because the pledge was made to a registered non-profit entity, bypassing the consideration requirement entirely."
        ],
        ans: 1,
        exp: "Promissory estoppel is met when: 1) A party relies on another's promise to their detriment, 2) The reliance was reasonable, 3) The promisor knew or should have known that the promisee would rely, and 4) Enforcement is necessary to avoid injustice. The charity's reasonable, detrimental reliance (buying the van) makes the promise enforceable despite the lack of consideration."
    },
    {
        id: 6,
        topic: "Defenses / Statute of Frauds (Goods Already Accepted)",
        fp: "Retailer calls Wholesaler and orally agrees to purchase 100 premium winter jackets at $10 each (totaling $1,000). Wholesaler ships 50 jackets to Retailer. Retailer receives and accepts the 50 jackets, placing them on the sales floor. However, Wholesaler refuses to ship the remaining 50 jackets, citing the lack of a written contract.",
        q: "To what extent is this oral contract enforceable?",
        opts: [
            "The contract is completely unenforceable because it violates the Statute of Frauds for the sale of goods over $500.",
            "The contract is fully enforceable for all 100 jackets because partial delivery removes the entire contract from the Statute of Frauds.",
            "The contract is enforceable only for the 50 jackets that were already received and accepted by the buyer.",
            "The contract is enforceable only if the retailer can produce a merchant's confirmatory memo."
        ],
        ans: 2,
        exp: "Contracts for the sale of goods of $500 or more fall within the Statute of Frauds. However, exceptions for Ks for the sale of goods include 'goods already accepted'. Ks where the goods have already been accepted will be enforceable without a writing, but this exception only applies to the extent of the goods actually received and accepted (the 50 jackets)."
    },
    {
        id: 7,
        topic: "Defenses / Fraud (Non-Disclosure)",
        fp: "Seller is selling his used truck. He knows the transmission is completely ruined and rattles loudly. To mask the issue, he fills the transmission with a thick, specialized heavy oil that temporarily silences the rattling just long enough for a test drive. Buyer takes the truck for a spin, hears no noise, and buys it. Seller makes no verbal statements about the transmission. The transmission fails the next day.",
        q: "Can Buyer defeat enforcement of the contract based on misrepresentation?",
        opts: [
            "No, because the seller made no affirmative statements, and the buyer assumed the risk by failing to hire a mechanic.",
            "Yes, because the active concealment of a material defect violates good faith and amounts to an actionable non-disclosure misrepresentation.",
            "No, because used vehicles are sold strictly 'as-is' under the doctrine of caveat emptor.",
            "Yes, but only if the buyer explicitly inquired about the transmission prior to the test drive."
        ],
        ans: 1,
        exp: "Non-disclosure amounts to a misrepresentation when a party fails to disclose a material fact that is a basic assumption of the contract, and the non-disclosure occurs in a way that violates good faith. Actively using thick oil to conceal a known, severe defect is a bad-faith non-disclosure, allowing the buyer to assert misrepresentation to defeat the contract."
    },
    {
        id: 8,
        topic: "Terms / Parol Evidence Rule Exception (Condition Precedent)",
        fp: "Buyer and Seller sign a completely integrated written contract for the sale of Seller's restaurant. However, before signing, they orally agree that the contract will not take effect unless Buyer successfully obtains a commercial liquor license from the city within 30 days. The written document does not mention the liquor license. Buyer fails to get the license and refuses to buy the restaurant. Seller sues, arguing the oral agreement is barred by the Parol Evidence Rule.",
        q: "Is evidence of the oral agreement regarding the liquor license admissible?",
        opts: [
            "No, because a completely integrated writing bars all prior oral agreements, whether contradicting or supplemental.",
            "No, because licensing contingencies must be explicitly written into real estate contracts.",
            "Yes, because evidence of a condition precedent to effectiveness is a recognized exception to the Parol Evidence Rule.",
            "Yes, because the oral agreement occurred contemporaneously with the signing of the document."
        ],
        ans: 2,
        exp: "While the Parol Evidence Rule generally bars prior agreements that contradict an integrated writing, there are exceptions. Evidence concerning contract validity, specifically a 'condition precedent to effectiveness', is always admissible to show that the contract never came into existence because the condition was not met."
    },
    {
        id: 9,
        topic: "Terms / Risk of Loss (Shipment Contract)",
        fp: "Manufacturer in Detroit contracts to sell 500 laptops to Retailer in Miami. The contract specifies 'FOB Detroit.' Manufacturer properly hands the laptops over to a reliable shipping carrier in Detroit, makes reasonable arrangements for delivery, and notifies Retailer of the shipment. While in transit over the Rocky Mountains, the delivery truck catches fire and the laptops are destroyed.",
        q: "Who bears the risk of loss for the destroyed laptops?",
        opts: [
            "Manufacturer, because sellers retain the risk of loss until the goods arrive at the buyer's physical location.",
            "Manufacturer, because 'FOB Detroit' indicates a destination contract.",
            "Retailer, because the risk of loss passed to the buyer once the seller gave the goods to the common carrier, made delivery arrangements, and notified the buyer.",
            "The shipping carrier, because common carriers strictly assume absolute liability for all goods in transit."
        ],
        ans: 2,
        exp: "This is a shipment contract (FOB Seller's location). If the K is a shipment K, risk of loss (ROL) passes from seller to buyer once the seller: 1) Gives goods to a common carrier, 2) Makes reasonable arrangements for delivery, and 3) Notifies the buyer. Since Manufacturer fulfilled these steps, the risk had already passed to Retailer."
    },
    {
        id: 10,
        topic: "Terms / Implied Warranty of Merchantability",
        fp: "Bakery purchases a new industrial dough mixer from Kitchen Supply Co., a merchant specializing in commercial kitchen equipment. The contract contains no express warranties or disclaimers. During its very first use mixing standard bread dough, the mixer's internal gears shatter, rendering it completely useless.",
        q: "Has Kitchen Supply Co. breached a warranty?",
        opts: [
            "No, because the bakery failed to secure an express written warranty at the time of purchase.",
            "Yes, the implied warranty of fitness for a particular purpose, because the bakery relied on the merchant's skill.",
            "No, because the manufacturer of the mixer is solely liable for internal mechanical defects.",
            "Yes, the implied warranty of merchantability, because the mixer was not fit for its ordinary purpose."
        ],
        ans: 3,
        exp: "The implied warranty of merchantability is implied in all Ks for the sale of goods sold by a merchant. The implied warranty of merchantability is breached if goods are not fit for their ordinary purpose. Shattering while mixing standard dough demonstrates the mixer is unfit for its ordinary purpose, constituting a breach."
    },
    {
        id: 11,
        topic: "Performance / Perfect Tender Rule",
        fp: "Office Manager orders 1,000 blue pens from SupplyCo for $500. SupplyCo ships a box containing 990 blue pens and 10 black pens. Office Manager discovers the nonconformity upon delivery.",
        q: "Under the UCC, what are Office Manager's legal options?",
        opts: [
            "Reject the entire shipment, retain all the goods and sue for damages, or reject any commercial units (the black pens) and keep the rest.",
            "Reject only the 10 black pens and automatically pay a proportionally reduced price for the 990 blue pens.",
            "Retain the entire shipment and demand a thirty-day cure period from the seller.",
            "Reject the entire shipment, as partial acceptance is strictly prohibited under the perfect tender rule."
        ],
        ans: 0,
        exp: "In contracts for the sale of goods, the seller must perfectly tender. If the seller does not perfectly conform... the buyer has three options: 1) Buyer can retain all the goods and sue for damages, 2) Buyer can reject all the goods and sue for damages, or 3) Buyer can reject a commercial unit, keep the rest, and sue for damages."
    },
    {
        id: 12,
        topic: "Performance / Minor vs. Material Breach (Common Law)",
        fp: "Homeowner hires Painter to paint her house pure white for $3,000. Painter completes the entire job flawlessly, but accidentally uses 'eggshell white' instead of 'pure white.' The colors are nearly identical, and the house looks fantastic. Homeowner realizes the mistake, declares a material breach, and refuses to pay Painter anything.",
        q: "Is Homeowner legally entitled to completely withhold payment?",
        opts: [
            "Yes, because under the common law, any deviation from the express terms constitutes a material breach.",
            "No, because the breach was minor due to substantial performance; Homeowner must pay the contract price but may sue for damages representing any difference in value.",
            "Yes, because the perfect tender rule applies to all contracts involving aesthetic improvements to real property.",
            "No, because painting contracts are governed by the subjective satisfaction standard."
        ],
        ans: 1,
        exp: "Under the common law, a breach is minor if there was substantial but not complete performance. If the defendant has committed a minor breach, the plaintiff is entitled to sue for damages, but the plaintiff must still perform (pay). Because Painter substantially performed the job, Homeowner cannot completely withhold payment."
    },
    {
        id: 13,
        topic: "Excuses / Anticipatory Repudiation",
        fp: "Retailer contracts with Wholesaler for the delivery of 500 bicycles on June 1. On May 15, Wholesaler emails Retailer, stating: 'I am experiencing some serious supply chain delays. It is going to be really tough, and I probably won't be able to deliver your bicycles by June 1.' Retailer immediately files a lawsuit for breach of contract on May 16.",
        q: "Was Retailer legally permitted to sue for breach on May 16?",
        opts: [
            "Yes, because Wholesaler's email constituted a valid anticipatory repudiation.",
            "No, because a party commits anticipatory repudiation only if they make an unambiguous statement that they will no longer perform, which this email lacked.",
            "Yes, because any expression of doubt regarding performance immediately voids a commercial sales contract.",
            "No, because anticipatory repudiation does not apply to the sale of goods under the UCC."
        ],
        ans: 1,
        exp: "A party commits an anticipatory repudiation if: 1) Breaching party makes an unambiguous statement that they will no longer perform their contractual duty. Expressions of doubt or stating it will be 'tough' or they 'probably won't' are ambiguous and do not constitute anticipatory repudiation, meaning the lawsuit is premature."
    },
    {
        id: 14,
        topic: "Excuses / Impossibility",
        fp: "Band contracts to rent a historic local theater for a concert on Friday night, agreeing to pay $5,000. On Thursday afternoon, a massive, unpreventable lightning storm causes the theater to burn to the ground. Band demands that the theater owner provide a replacement venue or face a breach of contract lawsuit.",
        q: "Is the theater owner liable for breach of contract?",
        opts: [
            "Yes, because the owner bears the absolute risk of loss for commercial property rentals.",
            "Yes, because the owner has a non-delegable duty to provide a substantially similar venue under the doctrine of impracticability.",
            "No, because the unforeseen destruction of the specific subject matter makes performance literally impossible, excusing the owner.",
            "No, because lightning strikes are considered foreseeable risks in the commercial entertainment industry."
        ],
        ans: 2,
        exp: "Impossibility occurs when: 1) There has been an unforeseen circumstance 2) Which has made performance literally impossible... [and] destruction of the subject matter of the contract [is a common trigger]. Because the specific theater burned down through no fault of the owner, performance is impossible and the owner is excused."
    },
    {
        id: 15,
        topic: "Third Party / Vesting of Beneficiary Rights",
        fp: "Grandmother contracts with Dealership to buy a car, explicitly instructing Dealership to deliver the car to Grandson as a graduation gift. Grandson learns of the contract and, relying on the forthcoming car, immediately sells his old vehicle and buys expensive new car accessories. A week later, Grandmother and Dealership mutually agree to cancel the contract. Grandson sues Dealership for the car.",
        q: "Can Grandson successfully enforce the contract?",
        opts: [
            "No, because a donee beneficiary possesses no legal rights to enforce a contract under any circumstances.",
            "Yes, because his rights as an intended beneficiary vested when he materially changed his position in justifiable reliance on the receipt of the car.",
            "No, because Grandmother and Dealership mutually rescinded the contract before the car was physically delivered.",
            "Yes, because family members are presumed to have irrevocable vested rights in all donative contracts."
        ],
        ans: 1,
        exp: "A 3rd party beneficiary may prevent the removal or modification of a benefit if: 1) The 3rd party was an intended beneficiary and 2) The 3rd party's right to entitlement has vested. Rights vest if... The 3rd party has materially changed their position in justifiable reliance on the receipt of that benefit. Grandson's selling of his old car constitutes reliance, vesting his rights."
    },
    {
        id: 16,
        topic: "Third Party / Assignment for Value",
        fp: "Client owes Accountant $500 for tax services. Accountant owes his Landlord $500 for office rent. Accountant signs a document assigning his right to collect the $500 from Client over to his Landlord to satisfy the rent debt. The next day, Accountant gets into an argument with Landlord and calls Client, stating: 'I revoke the assignment; pay me the $500 directly.'",
        q: "Is Accountant's revocation of the assignment valid?",
        opts: [
            "Yes, because assignments are inherently revocable at the whim of the assignor.",
            "No, because an assignment given to satisfy a pre-existing debt is an assignment for value, which cannot be revoked.",
            "Yes, because the landlord did not provide fresh, independent consideration for the assignment.",
            "No, because the client is an intended creditor beneficiary whose rights have already vested."
        ],
        ans: 1,
        exp: "An assignment is 'for value' if it was given in exchange for consideration OR given to satisfy a pre-existing debt. If an assignment is for value, it cannot be revoked. Because Accountant assigned the rent to satisfy his debt to Mechanic/Landlord, it is irrevocable."
    },
    {
        id: 17,
        topic: "Third Party / Delegation Limitations",
        fp: "A world-renowned architect contracts with City to design a new municipal art museum. The architect becomes too busy and delegates the design duties to a recently graduated architecture student with no prior experience. City refuses to accept the student's designs and sues the famous architect for breach.",
        q: "Was this a valid delegation of duties?",
        opts: [
            "Yes, because commercial duties are freely delegable under the common law.",
            "No, because a delegation is not allowed when the duty involves personal judgment, special skill, or special trust in the delegator.",
            "Yes, provided the famous architect remains vicariously liable for any structural flaws in the student's design.",
            "No, because municipal contracts cannot be delegated without a formal vote by the city council."
        ],
        ans: 1,
        exp: "Delegations are generally allowed, but delegation is NOT allowed when: The duty delegated involves personal judgment or skill, or the duty delegated involves special trust in the delegator. A contract for a world-renowned architect to design a museum heavily relies on personal skill and judgment, making the delegation invalid."
    },
    {
        id: 18,
        topic: "Consideration / Pre-Existing Duty",
        fp: "Lifeguard is employed by a beach resort and paid a daily salary to rescue struggling swimmers. Lifeguard rescues a drowning guest. The guest's grateful spouse promises to pay Lifeguard a $1,000 reward for saving the guest's life. The spouse later refuses to pay.",
        q: "Is the promise to pay the reward enforceable?",
        opts: [
            "Yes, because saving a life provides a profound legal benefit to the promisor.",
            "No, because a promise given in exchange for a duty already owed (pre-existing duty) is not valid consideration.",
            "Yes, under the doctrine of moral obligation and emergency rescue restitution.",
            "No, because the promise was not made prior to the commencement of the rescue."
        ],
        ans: 1,
        exp: "For a contract to be formed, there must be consideration. A promise given in exchange for a duty already owed is not valid consideration (the pre-existing duty rule). Because the Lifeguard was already employed and legally obligated to rescue swimmers, performing that duty cannot serve as consideration for the spouse's new promise to pay $1,000."
    },
    {
        id: 19,
        topic: "Termination / Revocation of Unilateral Offer",
        fp: "Uncle announces to his Niece, 'I will pay you $5,000 if you successfully climb to the top of Mount Baldy by Sunday.' Niece immediately buys climbing gear and begins ascending the mountain. Halfway up the mountain, Uncle sends a drone with a speaker to Niece, announcing, 'I revoke my offer!'",
        q: "Is Uncle's revocation legally effective?",
        opts: [
            "Yes, because a unilateral offer can be revoked at any point before complete performance is achieved.",
            "No, because an offeror may not revoke an offer for a unilateral contract if the offeree has begun performance.",
            "Yes, because the niece did not provide independent consideration to hold the offer open.",
            "No, because family promises are presumed to be firm offers under the Uniform Commercial Code."
        ],
        ans: 1,
        exp: "An offeror may not revoke his offer if: 1) He made an offer for a unilateral K, and 2) The offeree has begun performance. Once performance has begun, the offeror must give the offeree a reasonable amount of time to complete performance. Because Niece had already begun ascending the mountain, Uncle's revocation is ineffective."
    },
    {
        id: 20,
        topic: "Acceptance / Mailbox Rule Exception",
        fp: "On Monday, Buyer receives a written offer from Seller. On Tuesday, Buyer mails a rejection letter to Seller. On Wednesday, Buyer changes his mind and mails an acceptance letter to Seller. On Thursday, Seller receives the acceptance letter. On Friday, Seller receives the rejection letter.",
        q: "Has a valid contract been formed?",
        opts: [
            "No, because the rejection letter was dispatched first, permanently terminating the offer upon mailing.",
            "No, because a dispatched rejection inherently voids any subsequently dispatched communications.",
            "Yes, because if a rejection is sent first and then the acceptance, the first to be received wins, and the acceptance arrived first.",
            "Yes, because acceptances are always effective upon dispatch, regardless of prior rejections."
        ],
        ans: 2,
        exp: "Per the mailbox rule, acceptance is generally effective once dispatched. However, there is a specific rule if both acceptance and rejection are sent: If a rejection is sent first and then the acceptance, then the first to be received wins. Because the acceptance was received on Thursday (before the rejection on Friday), a contract is formed."
    },
    {
        id: 21,
        topic: "Acceptance / UCC 2-207 Additional Terms",
        fp: "Textile Mill, a merchant, sends an offer to Clothing Co., also a merchant, to sell 1,000 yards of cotton for $5,000. Clothing Co. sends an acceptance form that perfectly matches the price and quantity, but adds a clause stating: 'Standard industry interest of 2% will apply to any late payments.' The offer did not limit acceptance to its terms, and Textile Mill does not object to the new clause.",
        q: "Is the interest clause included in the final contract?",
        opts: [
            "No, because under the mirror image rule, the additional term transforms the acceptance into a counteroffer.",
            "Yes, because between merchants, an additional term that does not materially alter the contract is added unless the offer limits acceptance or the offeror objects.",
            "No, because all additional terms require the explicit, written assent of both parties under the UCC.",
            "Yes, because the acceptance was expressly conditional on the inclusion of the interest clause."
        ],
        ans: 1,
        exp: "Under UCC 2-207(2), if both parties are merchants, additional terms may be added to the contract unless the original offer limits acceptance to its terms, the term materially alters the obligation, or the offeror rejects it within a reasonable time. A standard interest clause on late payments does not materially alter the contract, so it is included."
    },
    {
        id: 22,
        topic: "Defenses / Unilateral Mistake",
        fp: "Collector finds a rare coin at a yard sale and realizes it is worth $10,000. The seller, who clearly has no idea of its true value, has marked it for $2. Collector quickly pays the $2. The next day, the seller discovers the true value and demands the coin back, claiming mistake.",
        q: "Can the seller successfully rescind the sale based on unilateral mistake?",
        opts: [
            "No, because the seller absorbed the risk by choosing to sell items at a yard sale without having them appraised.",
            "Yes, because a unilateral mistake regarding value always renders a consumer contract voidable.",
            "No, because the collector was a bona fide purchaser for value.",
            "Yes, because the collector knew of the mistake, the mistake had a material effect, and the seller did not absorb the risk."
        ],
        ans: 0,
        exp: "A unilateral mistake will defeat enforcement if the non-mistaken party knew of the mistake, it has a material effect, AND the mistaken party did not absorb the risk. However, when someone sells items at a yard sale for cheap without knowing their value, they inherently absorb the risk of their own ignorance (conscious ignorance), preventing them from claiming mistake."
    },
    {
        id: 23,
        topic: "Excuses / Constructive Conditions",
        fp: "Landscaper agrees to mow Homeowner's lawn, and Homeowner agrees to pay $50. The contract does not state whether payment should occur before or after the mowing. Landscaper shows up and demands the $50 upfront before starting the mower. Homeowner refuses to pay until the job is done. Landscaper sues for breach of contract.",
        q: "Is Homeowner in breach for refusing to pay upfront?",
        opts: [
            "Yes, because service providers are legally entitled to prepayment to prevent unjust enrichment.",
            "No, because under the doctrine of constructive conditions, the duty of each party to perform is conditioned on the other party performing, and service must generally precede payment.",
            "Yes, because the absence of a specific payment date renders the contract illusory.",
            "No, because the Statute of Frauds requires all payment terms to be expressly written."
        ],
        ans: 1,
        exp: "A constructive condition is not expressly agreed to but imposed by the courts to ensure fairness: The duty of each party to perform is conditioned on the other party performing. In service contracts where the order of performance is silent, the constructive condition requires the longer performance (the work) to precede the shorter performance (the payment)."
    },
    {
        id: 24,
        topic: "Excuses / Accord and Satisfaction",
        fp: "Client owes Contractor $5,000 for building a deck. Client genuinely disputes the quality of the wood used and refuses to pay the full amount, offering to pay $4,000 to settle the matter. Contractor accepts the $4,000 cash. A week later, Contractor sues Client for the remaining $1,000, arguing the agreement lacked consideration because Client already owed $5,000.",
        q: "Will Contractor succeed in recovering the $1,000?",
        opts: [
            "Yes, because under the preexisting duty rule, Client was already obligated to pay the $5,000 contract price.",
            "No, because accepting a lesser amount as a compromised solution to a bona fide dispute provides valid consideration for an accord and satisfaction.",
            "Yes, because accord and satisfaction requires the new agreement to be memorialized in a signed writing.",
            "No, because the Contractor accepted the cash without reserving his rights under the Uniform Commercial Code."
        ],
        ans: 1,
        exp: "An accord is a valid new agreement if the accord contains new consideration or is a compromised solution to a bona fide dispute. Simply paying less money is not new consideration, but accepting less money in light of a good faith dispute satisfies consideration. Because Client disputed the quality in good faith, the accord was valid, discharging the original debt."
    },
    {
        id: 25,
        topic: "Excuses / Frustration of Purpose",
        fp: "Vendor rents a prime booth space at a convention center for $2,000 specifically to sell merchandise at the 'Annual Tech Expo.' The convention center is fully aware of Vendor's sole purpose. A week before the event, the Tech Expo organizers go bankrupt and completely cancel the expo. Vendor refuses to pay the $2,000 rental fee.",
        q: "Is Vendor excused from paying the rental fee?",
        opts: [
            "No, because the physical booth space remains fully available for the vendor to use.",
            "Yes, under the doctrine of impossibility, because it is literally impossible to occupy the booth.",
            "No, because bankruptcy of third parties is a foreseeable risk in commercial venue rentals.",
            "Yes, under the doctrine of frustration of purpose, because the unforeseen cancellation completely frustrated the mutually known purpose of the contract."
        ],
        ans: 3,
        exp: "Frustration of purpose excuses performance when: 1) There has been an unforeseen circumstance, 2) That has completely frustrated the party's purpose to enter into this agreement, 3) Both parties must have known of this purpose at the time of making the K, and 4) The party did not absorb the risk. Since both knew the rental was solely for the Expo, its cancellation excuses Vendor."
    }
];