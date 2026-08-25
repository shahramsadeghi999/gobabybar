const examData = [
    {
        id: 1,
        topic: "Terms / UCC Gap Fillers (Price)",
        fp: "Manufacturer and Retailer, both merchants, sign a contract for Retailer to purchase 500 standardized steel brackets. The contract specifies the quantity and delivery date but completely omits the price. Manufacturer delivers the brackets on the agreed date. Retailer accepts them but refuses to pay, arguing the contract is void for lack of a definite price term.",
        q: "Is Retailer legally obligated to pay for the brackets?",
        opts: [
            "No, because under the common law, price is an essential term without which a contract fails for indefiniteness.",
            "No, because the Statute of Frauds requires all essential terms to be in writing.",
            "Yes, because under the Uniform Commercial Code, if the price term is missing, the court will apply a gap filler setting a reasonable price at the time of delivery.",
            "Yes, because retaining goods for more than 24 hours constitutes an implied-in-fact agreement to pay the seller's initial asking price."
        ],
        ans: 2,
        exp: "An offer is valid under the UCC even if it's missing terms like price, time for payment, or delivery. The court will use 'gap fillers' to determine these missing terms. If price is none stated, then a reasonable price set by the court taken at the time of delivery is used."
    },
    {
        id: 2,
        topic: "Acceptance / Mailbox Rule Exception (Option Contracts)",
        fp: "Owner offers to sell a parcel of land to Buyer for $100,000. Buyer pays Owner $500 to keep the offer open until 5:00 PM on Friday, creating a valid option contract. On Thursday afternoon, Buyer drops an acceptance letter in the mail. Owner receives the letter on Saturday morning. Owner refuses to sell the land, claiming the acceptance was late.",
        q: "Did Buyer validly accept the offer?",
        opts: [
            "Yes, because under the mailbox rule, acceptance is effective upon dispatch on Thursday.",
            "No, because the mailbox rule does not apply to option contracts; acceptance must be received on or before the specified date.",
            "Yes, because placing the letter in the mail constitutes substantial performance of the option.",
            "No, because real estate options must be accepted in person."
        ],
        ans: 1,
        exp: "Per the mailbox rule, acceptance is effective once dispatched. However, an exception exists: The mailbox rule does not apply, and acceptance is effective only upon receipt, if there is a valid option contract attached to the offer. Because it was received Saturday (after the Friday deadline), acceptance was invalid."
    },
    {
        id: 3,
        topic: "Defenses / Statute of Frauds (Lifetime Contracts)",
        fp: "Employer orally promises Employee, 'If you agree to manage my store, I will employ you for the rest of your life at a salary of $50,000 per year.' Employee accepts and begins working. Two years later, Employer fires Employee without cause. Employee sues for breach of contract. Employer raises the Statute of Frauds as a defense, arguing the contract lasted more than a year.",
        q: "Will Employer's Statute of Frauds defense succeed?",
        opts: [
            "Yes, because employment contracts inherently require a signed writing.",
            "No, because lifetime contracts do not fall within the Statute of Frauds since a person could die before a year's worth of performance.",
            "Yes, because the contract was actually performed over a two-year period, triggering the one-year rule retroactively.",
            "No, because part performance of employment for two years completely removes the contract from the Statute of Frauds."
        ],
        ans: 1,
        exp: "Contracts that must take longer than a year to complete fall within the SOF. However, lifetime contracts do not fall within the SOF under this rule because a person could theoretically die before a year's worth of performance, meaning it could be completed within a year."
    },
    {
        id: 4,
        topic: "Terms / Disclaiming Implied Warranties",
        fp: "Used Car Dealership sells a used sedan to Customer. The written sales contract features a prominent, conspicuously bolded clause stating: 'VEHICLE SOLD AS IS.' The next day, the car's transmission fails, rendering it completely unfit for its ordinary purpose of driving. Customer sues for breach of the implied warranty of merchantability.",
        q: "Is Dealership liable for the breach of warranty?",
        opts: [
            "Yes, because an implied warranty of merchantability can only be disclaimed by explicitly using the word 'merchantability.'",
            "No, because a seller making a general disclaimer, such as an 'As is' clause, successfully disclaims the implied warranty of merchantability.",
            "Yes, because vehicles are classified as necessaries, barring any disclaimers.",
            "No, because implied warranties only apply to new goods, not used inventory."
        ],
        ans: 1,
        exp: "The implied warranty of merchantability can be disclaimed in two ways: 1) A disclaimer that includes the word 'merchantability,' or 2) The seller makes a general disclaimer, such as an 'As is' clause. The 'AS IS' clause validly disclaimed the warranty."
    },
    {
        id: 5,
        topic: "Terms / Risk of Loss (Breach by Seller)",
        fp: "Retailer orders 100 blue widgets from Manufacturer under a shipment contract ('FOB Manufacturer's Plant'). Manufacturer improperly ships 100 red widgets. While the red widgets are in transit on a common carrier, a tornado destroys the delivery truck. Manufacturer demands payment, arguing the risk of loss passed to Retailer when the goods were given to the carrier.",
        q: "Who bears the risk of loss?",
        opts: [
            "Retailer, because in an FOB shipment contract, risk passes upon delivery to the carrier.",
            "Retailer, because a tornado is an unforeseeable act of God.",
            "Manufacturer, because the breaching party bears the risk of loss, even if the breach (shipping wrong colors) is unrelated to the loss.",
            "The common carrier, because they retain strict liability during interstate commerce."
        ],
        ans: 2,
        exp: "There is an order of assessing who absorbs the risk of loss: 1) K language controls, 2) Breaching party bears ROL, even if breach is unrelated to the loss. Because Manufacturer breached the perfect tender rule by shipping red widgets instead of blue, Manufacturer retains the risk of loss."
    },
    {
        id: 6,
        topic: "Remedies / Expectation Damages (Construction Breach)",
        fp: "Homeowner contracts with Builder to construct a pool for $20,000. Halfway through, Builder unjustifiably abandons the project. Homeowner hires a replacement contractor who charges $15,000 to finish the pool. Prior to Builder's breach, Homeowner had already paid Builder $10,000 in progress payments.",
        q: "What amount can Homeowner recover from Builder in expectation damages?",
        opts: [
            "$5,000, which puts Homeowner in the position he expected to be in (total cost $25,000 minus expected cost $20,000).",
            "$10,000, representing the progress payments already made to Builder.",
            "$15,000, representing the cost of the replacement contractor.",
            "$0, because Homeowner received the benefit of a partially completed pool."
        ],
        ans: 0,
        exp: "Expectation damages place the injured party in the financial position they would have occupied had the contract been fully performed. Homeowner expected to pay $20,000 total. Instead, Homeowner paid $10,000 to Builder + $15,000 to Replacement = $25,000 total. The difference of $5,000 makes Homeowner whole."
    },
    {
        id: 7,
        topic: "Performance / Acceptance of Goods (Failure to Object)",
        fp: "Wholesaler delivers 500 custom dining chairs to Furniture Store on January 1. Store's manager signs for the boxes and places them in the back warehouse without opening them. On July 1, the manager finally opens the boxes and discovers the chairs are the wrong design. Store attempts to reject the delivery.",
        q: "Can Furniture Store legally reject the non-conforming chairs?",
        opts: [
            "Yes, because the perfect tender rule permits rejection at any point prior to final retail sale.",
            "No, because the buyer cannot reject the goods if he has already impliedly accepted them by receiving the goods and failing to object within a reasonable amount of time.",
            "Yes, because latent design defects cannot be waived by mere storage.",
            "No, because the signing of the delivery receipt explicitly waives all UCC warranties."
        ],
        ans: 1,
        exp: "The buyer cannot reject the goods if he has already accepted them. A buyer can impliedly accept by receiving the goods and failing to object within a reasonable amount of time. Waiting six months (January to July) to inspect and object is unreasonable, constituting implied acceptance."
    },
    {
        id: 8,
        topic: "Termination / Operation of Law (Death - Contract Formed)",
        fp: "On Monday, Buyer and Seller sign a valid, binding written contract for Buyer to purchase Seller's antique car for $10,000, with delivery and payment scheduled for Friday. On Wednesday, Buyer unexpectedly dies in a tragic accident. Seller tenders the car on Friday and demands payment from Buyer's estate.",
        q: "Is Buyer's estate obligated to pay for the car?",
        opts: [
            "No, because the death of a contracting party automatically terminates the contract by operation of law.",
            "No, because the doctrine of impossibility excuses performance when the paying party dies.",
            "Yes, because the contract was already formed prior to the death, and the purchase of a car is not a unique personal service.",
            "Yes, but only if the estate's executor specifically ratifies the contract in probate court."
        ],
        ans: 2,
        exp: "Death terminates an *offer* before acceptance. However, once a contract is formed, death only excuses performance (under impossibility/impracticability) if it is a personal services contract where the deceased was necessary to perform. Buying a car is not a unique personal service; thus, the estate remains liable on the existing contract."
    },
    {
        id: 9,
        topic: "Third Party / Delegation (Delegatee Assumes Duty)",
        fp: "Contractor agrees to paint Owner's fence for $500. Contractor decides to go on vacation and delegates the painting duty to Subcontractor. Subcontractor explicitly tells Owner, 'I am taking over this job for value, and I assume the duty to paint your fence.' Subcontractor takes Contractor's payment but never paints the fence.",
        q: "Can Owner sue Subcontractor directly?",
        opts: [
            "No, because an obligee can generally only sue the original delegator.",
            "No, because delegations of service contracts are void without a formal novation.",
            "Yes, because the obligee may sue the delegatee for nonperformance if the delegation was for value and the delegatee 'assumed' the delegator's duty.",
            "Yes, because all delegates automatically acquire strict liability for performance under common law."
        ],
        ans: 2,
        exp: "The obligee may not sue the delegate for nonperformance UNLESS the delegation was for value and the delegate 'assumed' the delegator's duty. Because Subcontractor took value and explicitly stated he assumed the duty, Owner can sue Subcontractor directly."
    },
    {
        id: 10,
        topic: "Third Party / Vesting by Bringing Suit",
        fp: "Dad pays Tutor $1,000 upfront to provide 10 tutoring sessions for Son. After 2 sessions, Tutor stops showing up. Son (the intended beneficiary) files a breach of contract lawsuit against Tutor. The next day, Dad and Tutor sign an agreement modifying the contract, canceling the remaining sessions and splitting a $500 refund. Tutor moves to dismiss Son's lawsuit, citing the modification.",
        q: "Can Son continue his lawsuit to enforce the original contract?",
        opts: [
            "No, because the contracting parties retain the absolute right to mutually modify a contract.",
            "Yes, because Son is an intended beneficiary and his rights vested when he brought suit to enforce the promise, preventing subsequent modification without his consent.",
            "No, because Son did not provide any consideration to the Tutor.",
            "Yes, because educational contracts cannot be modified once performance has begun."
        ],
        ans: 1,
        exp: "A 3rd party beneficiary may prevent modification if they were an intended beneficiary and their rights vested. Rights vest if: 1) Assent, 2) The 3rd party has brought suit to enforce the promise, or 3) Detrimental reliance. Because Son brought suit before the modification, his rights vested, making the subsequent modification invalid against him."
    },
    {
        id: 11,
        topic: "Third Party / Successive Assignments for Value",
        fp: "Owner is owed $1,000 by Client. On Monday, Owner assigns the right to collect this $1,000 to Alpha in exchange for $800 cash. On Wednesday, Owner fraudulently assigns the exact same right to collect the $1,000 to Bravo in exchange for $900 cash. Client has not yet paid either.",
        q: "As between Alpha and Bravo, who holds the primary legal right to collect from Client?",
        opts: [
            "Bravo, because if successive assignments are for value, the last assignee assigned receives the benefit.",
            "Bravo, because he paid a higher cash value ($900) than Alpha.",
            "Alpha, because if the assignments are irrevocable (for value), the first assignee assigned gets the benefit/right.",
            "Neither, because a fraudulent double assignment extinguishes the obligor's underlying debt."
        ],
        ans: 2,
        exp: "For successive assignments, if the assignments are irrevocable (assignments for value), then the first assignee assigned gets the benefit/right. (Note: Gratuitous assignments go to the *last* assignee). Since both were for value, Alpha (the first in time) prevails."
    },
    {
        id: 12,
        topic: "Excuses / Request for Assurances (UCC)",
        fp: "Buyer contracts to purchase 500 barrels of oil from Seller for delivery in November. In September, a reliable industry publication reports that Seller has gone bankrupt and halted all operations. Buyer emails Seller requesting written assurances that the November delivery will occur. Seller reads the email but completely ignores it for 40 days.",
        q: "What is Buyer's legal status after the 40 days?",
        opts: [
            "Buyer must still wait until November to see if the oil is delivered.",
            "Buyer may treat Seller's failure to respond to the request for assurances as an anticipatory repudiation.",
            "Buyer must file for a preliminary injunction in bankruptcy court before taking contract action.",
            "Buyer is in breach for failing to tender payment in escrow."
        ],
        ans: 1,
        exp: "Under the UCC, upon receiving a request for assurances, the other party must respond within a reasonable period of time (typically not to exceed 30 days). If a party fails to respond, the requesting party may treat this failure as an anticipatory repudiation."
    },
    {
        id: 13,
        topic: "Acceptance / Battle of Forms (Non-Merchant)",
        fp: "Consumer emails Manufacturer (a merchant) offering to buy a standardized lawnmower for $300. Manufacturer emails back: 'I accept your offer to buy the lawnmower for $300. I am also adding a clause that requires any disputes to be settled in binding arbitration.' Manufacturer ships the mower, and Consumer accepts it.",
        q: "Is the arbitration clause included in the contract?",
        opts: [
            "Yes, because under the UCC, additional terms are automatically added unless they materially alter the contract.",
            "No, because the common law mirror image rule treats the response as a counteroffer.",
            "No, because under the UCC, if one or both parties are not merchants, the additional term is merely a proposal and is not added to the contract without express assent.",
            "Yes, because retaining the goods constitutes implied acceptance of all proposed terms."
        ],
        ans: 2,
        exp: "Under UCC 2-207(2), additional terms are only automatically considered for inclusion if BOTH parties are merchants. If one party is not a merchant (Consumer), the contract is formed on the original terms, and the new term is merely a proposal that must be expressly assented to by the offeror to be included."
    },
    {
        id: 14,
        topic: "Defenses / Unilateral Mistake (Reason to Know)",
        fp: "City issues a request for bids to repave a highway. Contractor A bids $50,000. Contractor B bids $52,000. Contractor C mistakenly omits a zero on his calculation sheet and submits a bid for $5,000. City officials review the bids, realize Contractor C obviously made a massive typo, but eagerly accept the $5,000 bid anyway. Contractor C realizes the error the next day.",
        q: "Can Contractor C defeat enforcement of the contract?",
        opts: [
            "Yes, because a unilateral mistake will defeat enforcement if the non-mistaken party knew or should have known of the mistake, and it materially affected the agreement.",
            "No, because commercial bidding contractors inherently absorb the risk of all calculation errors.",
            "No, because mutual mistake is required to defeat contract formation.",
            "Yes, but only under the doctrine of impracticability."
        ],
        ans: 0,
        exp: "A unilateral mistake will defeat enforcement if the non-mistaken party knew or should have known of the mistake, it has a material effect, and the mistaken party did not absorb the risk. Because the $5,000 bid was shockingly low compared to the $50k bids, City knew or should have known of the typo."
    },
    {
        id: 15,
        topic: "Termination / Firm Offer vs. Common Law Option",
        fp: "Homeowner, who is an accountant by trade, writes a signed letter to Neighbor stating: 'I offer to sell you my personal riding lawnmower for $500. I guarantee I will hold this offer open until Friday.' On Wednesday, Homeowner sells the mower to someone else and revokes the offer to Neighbor.",
        q: "Was Homeowner's revocation valid?",
        opts: [
            "No, because the written guarantee created an irrevocable firm offer under the UCC.",
            "No, because the mailbox rule renders all written offers irrevocable for three days.",
            "Yes, because the firm offer rule only applies if the offer is made by a merchant, and without consideration, this was not a valid option contract.",
            "Yes, because the sale of landscaping equipment is strictly governed by the common law."
        ],
        ans: 2,
        exp: "The UCC firm offer rule requires the offer to be made by a merchant (one who deals in goods of the kind). Because Homeowner is an accountant, not a lawnmower merchant, the firm offer rule does not apply. Without additional consideration to create a traditional option contract, the offer was freely revocable."
    },
    {
        id: 16,
        topic: "Defenses / Innocent Misrepresentation",
        fp: "Seller offers to sell his used boat to Buyer. Seller genuinely, but mistakenly, believes the boat has a fiberglass hull and tells Buyer, 'It has a highly durable fiberglass hull.' Buyer, who strictly needs a fiberglass boat for ocean sailing, buys it in reliance on this statement. Buyer later discovers the hull is made of cheap wood.",
        q: "Can Buyer rescind the contract?",
        opts: [
            "No, because the seller's statement was an innocent mistake, lacking fraudulent intent.",
            "Yes, because a party may defeat enforcement if the other party misrepresents a material fact that was justifiably relied upon, even if the misrepresentation was unintentional.",
            "No, because the buyer assumed the risk under the doctrine of caveat emptor.",
            "Yes, but only if the seller is found guilty of criminal fraud."
        ],
        ans: 1,
        exp: "A party may defeat enforcement of a K by misrepresentation if the other party misrepresents a material fact. This element is met when the party intentionally misrepresented a fact OR unintentionally misrepresented but had a reckless disregard for the truth (or innocently made a material misrepresentation that was justifiably relied upon, leading to damages)."
    },
    {
        id: 17,
        topic: "Remedies / Liquidated Damages (Unreasonable Penalty)",
        fp: "Tenant signs a one-year apartment lease for $1,000 per month. The lease includes a clause stating: 'If Tenant terminates this lease early, Tenant shall pay a liquidated damages penalty of $50,000.' Tenant breaches after one month. Landlord easily finds a new tenant a week later, but sues the original Tenant for $50,000.",
        q: "Is the liquidated damages clause enforceable?",
        opts: [
            "Yes, because parties to a real estate contract possess absolute freedom of contract to determine damages.",
            "No, because the stipulated amount is not a reasonable forecast of just compensation for the harm, making it an unenforceable penalty.",
            "Yes, because the tenant breached the contract voluntarily.",
            "No, because liquidated damages are completely prohibited in residential leases."
        ],
        ans: 1,
        exp: "A liquidated damages clause is valid only if damages were difficult to estimate at the time of contracting, and the amount stipulated is a reasonable forecast of just compensation. $50,000 for breaking a $1k/month lease is wildly disproportionate and constitutes an unenforceable penalty."
    },
    {
        id: 18,
        topic: "Excuses / Express Condition Precedent",
        fp: "Producer signs a contract with Artist, stating: 'I will pay you $5,000 for your painting, provided that my gallery secures funding from the City Arts Council by June 1.' Producer acts in good faith but fails to secure the funding by June 1. Artist demands payment anyway.",
        q: "Is Producer obligated to pay Artist?",
        opts: [
            "Yes, because the artist fully completed the painting, triggering the doctrine of substantial performance.",
            "Yes, because external funding contingencies violate the Uniform Commercial Code.",
            "No, because the failure of an express condition precedent excuses the protected party from performing.",
            "No, because the contract was an illusory promise."
        ],
        ans: 2,
        exp: "Conditions precedent to performance are conditions that must occur in order for a party's performance to be due. If a condition precedent to performance has been created (using express conditional language like 'provided that') and not satisfied, then the condition serves as an excuse for non-performance."
    },
    {
        id: 19,
        topic: "Remedies / Specific Performance (Personal Services)",
        fp: "Pop Star signs a valid contract to perform a live concert for Promoter. A week before the show, Pop Star receives a better offer and refuses to perform. Promoter sues and asks the court for an injunction forcing Pop Star to perform the concert as agreed.",
        q: "Will the court grant specific performance?",
        opts: [
            "Yes, because the pop star's unique singing voice cannot be easily replaced on the open market.",
            "No, because courts universally refuse to grant specific performance for personal service contracts.",
            "Yes, because the pop star committed a bad-faith breach.",
            "No, because specific performance is exclusively reserved for contracts involving the sale of goods over $500."
        ],
        ans: 1,
        exp: "Remedies include expectation damages, reliance damages, restitution, and specific performance for unique goods or real estate. However, courts will *never* grant specific performance to force an individual to perform personal services, as doing so violates public policy against involuntary servitude (though they may grant negative injunctions preventing them from working elsewhere)."
    },
    {
        id: 20,
        topic: "Formation / Output Contracts (Good Faith)",
        fp: "Tomato Farmer signs an output contract agreeing to sell 'all the tomatoes I produce this season' to Ketchup Co. at a fixed price of $2 per pound. Shortly after, the market price of tomatoes spikes to $10 per pound. To maximize his profits on the fixed $2 contract, Farmer buys 5 additional massive farms and produces ten times his normal historical output, demanding Ketchup Co. buy it all.",
        q: "Is Ketchup Co. obligated to buy the massively increased output?",
        opts: [
            "Yes, because an output contract legally obligates the buyer to purchase all that the seller produces, without exception.",
            "No, because in an output contract, a seller cannot tender an unreasonably disproportionate amount in light of stated estimates or normal prior output.",
            "Yes, because the UCC strictly prohibits buyers from canceling output contracts.",
            "No, because output contracts inherently violate the Statute of Frauds."
        ],
        ans: 1,
        exp: "In an output contract, no quantity term is needed because the buyer agrees to purchase all that the seller produces. However, the Good Faith rule applies: a seller should never tender an unreasonably disproportionate amount in light of the stated amount or normal circumstances. Increasing output 10x violates good faith."
    },
    {
        id: 21,
        topic: "Performance / Minor Breach (Substantial Performance)",
        fp: "Builder contracts to build a house for Owner according to exact specifications. Builder completes the entire house flawlessly, except he accidentally installs bronze doorknobs instead of the specified brass doorknobs. Owner declares a total material breach and refuses to pay the final $50,000 installment of the contract price.",
        q: "What is the legal outcome?",
        opts: [
            "Owner is excused from paying the $50,000 because the perfect tender rule applies.",
            "Builder committed a minor breach due to substantial performance; Owner must pay the $50,000 but may deduct the cost of replacing the doorknobs.",
            "Builder committed a material breach and forfeits all right to payment.",
            "Owner must pay the $50,000 and has no right to deduct damages because the breach was unintentional."
        ],
        ans: 1,
        exp: "Under the common law, a breach is minor if there was substantial but not complete performance. If the defendant has committed a minor breach, the plaintiff is entitled to sue for damages, but the plaintiff must still perform (pay). The wrong doorknobs constitute a minor breach; Owner must pay but can offset damages."
    },
    {
        id: 22,
        topic: "Terms / UCC Modification (Extortion/Bad Faith)",
        fp: "Supplier contracts to deliver custom microchips to TechCorp by Friday for $10,000. On Thursday, Supplier realizes TechCorp desperately needs the chips to launch a new product and has no alternative. Supplier calls and says, 'I won't deliver unless you agree to double the price to $20,000.' Desperate, TechCorp agrees. After delivery, TechCorp refuses to pay the extra $10,000.",
        q: "Is the modification enforceable under the UCC?",
        opts: [
            "Yes, because the UCC allows modifications without new consideration.",
            "Yes, because the modification was expressly assented to by both commercial merchants.",
            "No, because while the UCC does not require new consideration, it strictly requires modifications to be made in good faith, and extortionate coercion is bad faith.",
            "No, because the preexisting duty rule strictly applies to the sale of customized goods."
        ],
        ans: 2,
        exp: "Under the UCC, a modification is valid as long as the modification was made in good faith; the UCC does not require additional consideration to make the modification valid. However, extorting a party who is in a desperate situation (economic duress) is bad faith, rendering the modification invalid."
    },
    {
        id: 23,
        topic: "Third Party / Promisor Suing Promisee (Donee)",
        fp: "Uncle buys a new television from Best Buy as a gift for his Nephew. The TV is delivered, but Uncle fails to pay the bill. Nephew, discovering the bill was unpaid, wants to sue Uncle for failing to pay for his gift.",
        q: "Can Nephew (the donee beneficiary) sue Uncle (the promisee)?",
        opts: [
            "Yes, because intended third-party beneficiaries have universal standing to sue all parties to the contract.",
            "No, a donee beneficiary generally cannot sue the promisee because it was merely a promise of a gift, unless the beneficiary detrimentally relied on it.",
            "Yes, because the nephew holds an implied-in-fact contractual right.",
            "No, because only the promisor (Best Buy) can be sued by a creditor beneficiary."
        ],
        ans: 1,
        exp: "A donee beneficiary may sue the promisee IF the 3rd party beneficiary detrimentally relies on receipt of the benefit. Otherwise, because it is merely a gift, the donee beneficiary generally has no right to sue the promisee for failing to secure the gift."
    },
    {
        id: 24,
        topic: "Excuses / Accord and Satisfaction (Check Cashing)",
        fp: "Patient receives a $1,000 bill from Dentist. Patient disputes the bill in good faith, claiming the procedure was painful and incomplete. Patient sends Dentist a check for $600 prominently marked 'Payment in Full.' Dentist crosses out 'Payment in Full,' writes 'Under Protest,' cashes the check, and sues Patient for the remaining $400.",
        q: "Is Patient's debt discharged?",
        opts: [
            "Yes, because cashing a 'payment in full' check to settle a good faith dispute constitutes a valid accord and satisfaction, regardless of the dentist's written protests.",
            "No, because the dentist expressly reserved his rights by writing 'Under Protest' on the check.",
            "Yes, because medical bills are presumed voidable if the patient experiences subjective dissatisfaction.",
            "No, because the pre-existing duty rule required Patient to pay the full $1,000."
        ],
        ans: 0,
        exp: "An accord is an agreement to accept a different performance (e.g., $600) instead of the existing performance ($1,000) when it is a compromised solution to a bona fide dispute. Cashing the check marked 'Payment in Full' satisfies the accord and discharges the original obligation, even if the creditor attempts to cross it out or protest."
    },
    {
        id: 25,
        topic: "Formation / UCC Gap Fillers (Delivery Place)",
        fp: "Farmer and Grocery Store agree to a contract for 500 pounds of potatoes at $1 per pound. The contract is entirely silent on where the potatoes should be delivered. Grocery Store demands that Farmer deliver them to the store. Farmer demands that Grocery Store come pick them up at the farm.",
        q: "Under the UCC, what is the default place of delivery?",
        opts: [
            "The buyer's place of business.",
            "The seller's place of business.",
            "A neutral, mutually agreeable midpoint.",
            "The location where the contract was physically signed."
        ],
        ans: 1,
        exp: "An offer is valid under the UCC even if it's missing terms like price, delivery, or time for delivery; the court will use 'gap fillers'. If delivery location is none stated, then the default is the seller's place of business (or residence if none)."
    }
];