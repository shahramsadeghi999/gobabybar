const examData = [
    {
        id: 1,
        topic: "Third Parties / Delegation of Duties",
        fp: "In exchange for use of his neighbor's ski house, the homeowner hired a lawn service to maintain his lawn and his neighbor's lawn for the next two years, agreeing to pay the lawn service $50 per month for certain specified services. The homeowner and the lawn service signed a memorandum of agreement, and the homeowner gave a photocopy of it to his neighbor. Two months later, the homeowner sold his house to a doctor. At the closing of title, the homeowner handed the doctor the original memorandum of his agreement with the lawn service and executed an assignment to the doctor of his rights thereunder. The lawn service continued rendering services as agreed for an additional six months, receiving a check for $50 from the doctor each month. Then, the lawn service notified the neighbor and the doctor that it would no longer be able to work on their lawns. The neighbor hired a gardener to continue performing the same services on the neighbor's lawn for a fee of $25 per month.",
        q: "If the neighbor sues the doctor for $400 ($25 per month for the 16 months remaining in the term), should the court rule in the neighbor's favor?",
        opts: [
            "Yes, because the doctor's monthly payments to the lawn service resulted in an estoppel-type waiver of his rights to deny liability.",
            "Yes, because the homeowner's promise to provide lawn maintenance services touches and concerns the land.",
            "No, because the doctor did not agree to pay for the maintenance of the neighbor's lawn.",
            "No, because the price of $25 per month to maintain the neighbor's lawn was equal to one-half the price that the lawn service charged for maintaining both lawns."
        ],
        ans: 2,
        exp: "An assignment of rights under a contract does not automatically impose the assignor's contractual duties upon the assignee unless the assignee explicitly or implicitly assumes those duties[cite: 32]. While the doctor accepted the assignment of the homeowner's rights to receive lawn care and voluntarily paid for it for six months, the doctor never made a binding promise to assume the homeowner's affirmative contractual obligation to pay for the neighbor's lawn maintenance[cite: 32]. Therefore, the neighbor cannot sue the doctor for the breach."
    },
    {
        id: 2,
        topic: "Performance / Anticipatory Repudiation (Non-Delegable Duties)",
        fp: "On April 1, a law firm hired a famous and uniquely skilled software specialist to design and install new computer software specifically for the firm. The new software was to be installed by October 1. On August 15, after winning the state lottery, the specialist sold her business to a computer dealer. The computer dealer agreed to fulfill any existing contracts entered into by the specialist. On August 16, the specialist informed the firm of her sale to the dealer, stating that the software called for by the contract would be designed and installed by the dealer and not the specialist.",
        q: "If the firm institutes a claim against the specialist on August 18, should the court rule in its favor?",
        opts: [
            "Yes, because the specialist's statement on August 16 was an anticipatory repudiation.",
            "Yes, because the specialist's sale to the dealer did not impose on the dealer an obligation to design software.",
            "No, because design and installation of the software was not required until October 1.",
            "No, because her sale to the dealer implied a delegation of all her obligations under her contract with the firm."
        ],
        ans: 0,
        exp: "A contract calling for the application of unique personal skills or reputation (such as a famous, uniquely skilled software specialist) is strictly non-delegable[cite: 32]. By attempting to delegate a non-delegable duty and expressly stating that she would not personally perform the work, the specialist committed an anticipatory repudiation[cite: 32]. This unambiguously indicated her intent not to fulfill the contract, giving the law firm the immediate right to sue for breach on August 18, prior to the October 1 deadline[cite: 32]."
    },
    {
        id: 3,
        topic: "Defenses / Statute of Frauds (Merchant's Confirmatory Memo)",
        fp: "On May 15, a music store telephoned a guitar factory and ordered 50 guitars at a price of $200 per guitar. On May 16, the music store sent a signed letter marked 'Confirmation' that read: 'This confirms our order of 5 guitars.' On May 17, the factory shipped 50 guitars to the store. On May 18, the factory received the letter from the music store. On May 19, the factory sent a bill to the store for $10,000. On May 20, the music store received the bill. On May 21, the music store sent back the 50 guitars with a letter marked 'Failure to Order' that read: 'We never ordered these.' On May 22, the factory received the letter. The factory can make all of the guitars it has customer orders for, and it makes a profit of $50 per guitar.",
        q: "May the factory recover on the contract against the music store?",
        opts: [
            "Yes, for $10,000.",
            "Yes, for $2,500.",
            "Yes, for $250.",
            "No."
        ],
        ans: 2,
        exp: "Under UCC § 2-201, a contract for the sale of goods over $500 requires a writing. Between merchants, a written confirmation satisfies the Statute of Frauds against the recipient unless they object within 10 days[cite: 32]. However, the contract is explicitly NOT enforceable beyond the quantity of goods shown in the writing[cite: 32]. Because the music store's confirmation letter specified only 5 guitars, the contract is enforceable only up to that quantity. As a lost-volume seller, the factory is entitled to its lost profit on those 5 guitars. At $50 profit per guitar, the total recovery is $250[cite: 32]."
    },
    {
        id: 4,
        topic: "Formation / Privity of Contract",
        fp: "A local school held a charity auction where companies and other members of the community donated items for the school to auction off. A local guitar maker agreed to donate a new electric guitar valued at over $1,500. During the auction, the plaintiff bid $50 and was declared the highest bidder. The plaintiff gave the school a check for $50. Because the guitar company was so embarrassed at the low price paid for the guitar, it refused to deliver it to the plaintiff.",
        q: "If the plaintiff asserts a claim against the guitar company for failing to deliver the guitar, should the court rule in the plaintiff's favor?",
        opts: [
            "Yes, as an assignee.",
            "Yes, as an intended third-party creditor beneficiary.",
            "No, because there was no agreement between it and the plaintiff.",
            "No, because the agreement was not supported by consideration."
        ],
        ans: 2,
        exp: "To maintain an action for breach of contract, a plaintiff must generally be in privity of contract with the defendant or qualify as an intended third-party beneficiary[cite: 32]. Here, the guitar company made a promise to donate the guitar to the school, not to the plaintiff. The plaintiff contracted directly with the school (the auctioneer/seller). Because there was no contractual agreement or privity between the plaintiff bidder and the guitar company, the plaintiff has no direct legal standing to sue the company for nondelivery[cite: 32]."
    },
    {
        id: 5,
        topic: "Excuses / Frustration of Purpose",
        fp: "A famous musician was scheduled to play a concert that would be broadcast on national television. A music-streaming service that had an exclusive agreement with the musician contracted with the television network to run a 30-second advertisement on Saturday, October 1, at 8:15 P.M. Although the contract did not state it specifically, the understanding was that the advertisement would run during the last 15 minutes of the concert. The advertisement was designed to promote the music-streaming service by advertising the musician's 'surprise' new album that was exclusive to the site. The day before the concert, the musician was killed in a car accident. The television station offered to run the advertisement at the agreed time for a 20 percent discount, but the music service declined, stating that the entire advertisement and advertising campaign was built around the concert occurring.",
        q: "If the television station sues the music-streaming service for breach of contract, should the court rule in the television station's favor?",
        opts: [
            "Yes, because the contract did not specifically state the advertisement would run during the concert.",
            "Yes, since there was nothing stopping it from running the advertisement at the agreed time.",
            "No, under the doctrine of impossibility.",
            "No, under the doctrine of frustration of purpose."
        ],
        ans: 3,
        exp: "The doctrine of frustration of purpose discharges a party's contractual obligations when a supervening, unforeseeable event totally destroys the mutually understood principal purpose of the contract[cite: 32]. Here, both parties understood that the advertisement's core purpose was to capitalize on the broadcast of the musician's live concert[cite: 32]. The musician's death and the resulting cancellation of the concert entirely frustrated the fundamental purpose of the advertisement, discharging the music service from its obligation to pay for the airtime[cite: 32]."
    },
    {
        id: 6,
        topic: "Defenses / Mutual Mistake",
        fp: "During an ice storm, a man's car slipped down an embankment and became lodged against a large tree. The man called a towing company and told the company's manager that the car was 100 feet down the embankment. 'That's lucky,' said the manager, 'because our winch only goes 100 feet.' After the manager and the man agreed on a price, an employee of the company attempted to reach the car but could not because the car turned out to be 120 feet down the embankment.",
        q: "Is the towing company's performance excused on the grounds of mistake?",
        opts: [
            "No, because both parties were uncertain about the distance.",
            "No, because the towing company assumed the risk by the manager's failure to examine the distance himself.",
            "Yes, because at the time of contracting, both parties were mistaken about a basic assumption on which the contract was based.",
            "Yes, because the agreement did not allocate the risk of mistake to either party."
        ],
        ans: 2,
        exp: "Under Restatement (Second) of Contracts § 152, a contract is voidable by the adversely affected party if both parties were mistaken at the time the contract was made as to a basic assumption on which the contract was made, and that mistake had a material effect on the agreed exchange of performances[cite: 33]. Here, both the man and the towing company erroneously believed the car was exactly 100 feet down the embankment, a basic assumption critical to the company's ability to perform[cite: 33]. Since the company did not expressly or impliedly assume the risk of this error, they are excused due to mutual mistake[cite: 33]."
    },
    {
        id: 7,
        topic: "Defenses / Fraudulent Misrepresentation and Reformation",
        fp: "An employer offered to pay a terminated employee $50,000 to release all claims the employee might have against the employer. The employee orally accepted the offer. The employer then prepared an unsigned release agreement and sent it to the employee for him to sign. The employee carefully prepared, signed, and sent to the employer a substitute release agreement that was identical to the original except that it excluded from the release any age discrimination claims. The employer signed the substitute release without reading it. Shortly thereafter, the employee notified the employer that he intended to sue the employer for age discrimination.",
        q: "Is the employer likely to prevail in an action seeking reformation of the release to conform to the parties' oral agreement?",
        opts: [
            "No, because the employer acted unreasonably by failing to read the substitute release prior to signing it.",
            "No, because the parol evidence rule will preclude evidence of the oral agreement.",
            "Yes, because the employee's fraudulent behavior induced the employer's unilateral mistake.",
            "Yes, because the parties were mutually mistaken regarding the contents of the signed release."
        ],
        ans: 2,
        exp: "Reformation is an equitable remedy available when a writing fails to express the true agreement of the parties due to mutual mistake or a unilateral mistake induced by the other party's fraudulent misrepresentation[cite: 33]. By carefully preparing and substituting an altered document without notifying the employer, the employee committed an intentional, fraudulent concealment equivalent to a misrepresentation[cite: 33]. The employer's failure to read the document does not bar reformation because the reliance was justified in the face of active fraud[cite: 33]."
    },
    {
        id: 8,
        topic: "Formation / Implied-in-Fact Contract",
        fp: "An attorney received a document at his office with an attached note from a client for whom he had just finished drafting a will. The note read as follows: 'Do you think this contract of sale for my boat complies with state law? I would have talked to you in person about this, but I'm on my way out of town. I will be back next week.' The attorney reviewed the document and wrote a one-page letter to the client stating that the document complied with state law. The lawyer included a bill for $500, which was a reasonable fee. The client refused to pay the attorney anything, arguing that she had never agreed to retain the attorney and that she had received nothing of value from the attorney because the sales transaction was never concluded. Assume that there is no applicable statute or rule governing the formation of attorney-client relationships in the jurisdiction.",
        q: "If the attorney sues the client for the $500, will the attorney be likely to prevail?",
        opts: [
            "No, because even if the parties had an agreement, that agreement was discharged under the doctrine of frustration of purpose.",
            "No, because the attorney and the client never agreed on the essential terms of a contract.",
            "Yes, because the attorney took action on the client's note to his detriment.",
            "Yes, because the client's note and the attorney's performance created an implied-in-fact contract."
        ],
        ans: 3,
        exp: "An implied-in-fact contract is created when the parties' conduct, rather than their express words, demonstrates an intent to form a binding agreement[cite: 33]. The client's note, requesting specific legal advice from an attorney she had recently retained, constituted an offer for professional services[cite: 33]. By performing the requested legal review and providing the advice, the attorney accepted the offer by performance, establishing a valid implied-in-fact contract for which he is entitled to his reasonable fee[cite: 33]."
    },
    {
        id: 9,
        topic: "Remedies / Consequential Damages (Foreseeability)",
        fp: "A firm contracted with a municipality to repair a drawbridge and began work on February 1. The contract provided that the firm would be paid an additional $1,000 for each day the repair was completed before the April 1 completion deadline. On March 14, an unusual gear on the bridge broke. On that same day, the firm contracted with a supplier for a March 15 delivery to the bridge site of the only available replacement gear. The supplier did not know about the early-completion incentive-pay provision in the firm's contract. The supplier misdirected the delivery of the gear, and the firm did not receive it until March 20. The work on the bridge was completed on March 21. But for the late delivery of the gear, the firm would have completed the bridge repair on March 16.",
        q: "In an action against the supplier for breach of contract, will the firm be permitted to recover, as part of its damages, the additional $5,000 early-completion incentive pay it would have received from the municipality but for the supplier's breach?",
        opts: [
            "No, because the supplier did not expressly agree to be responsible for such damages.",
            "No, because the supplier did not know and had no reason to know about the early-completion incentive-pay provision.",
            "Yes, because the supplier is liable for all damages flowing directly from its breach.",
            "Yes, because, by the nature of its contract with the firm, the supplier should have known that time was of the essence."
        ],
        ans: 1,
        exp: "Under the rule of Hadley v. Baxendale, consequential (special) damages resulting from a breach are only recoverable if they were reasonably foreseeable to the breaching party at the time the contract was made[cite: 33]. Because the supplier had no knowledge of the specific, highly unusual early-completion incentive clause in the firm's contract with the municipality, the loss of that $5,000 bonus was not a foreseeable consequence of a late delivery in the ordinary course of events, precluding its recovery[cite: 33]."
    },
    {
        id: 10,
        topic: "Performance / Waiver of Express Condition",
        fp: "An architect agreed with a developer to design a large residential development. Because the architect had a history of substance abuse problems, the parties agreed that the developer's duty to accept and pay for the plans was conditioned on the architect's abstaining from drinking alcohol during the six months it would take to do the work. After two months, the architect began having several alcoholic drinks each day. The developer became aware of the architect's drinking before the architect showed the developer the preliminary plans. When the developer saw the preliminary plans, the developer told the architect that the concept was impressive and that he looked forward to seeing the final plans. The architect continued to have several alcoholic drinks each day and completed the plans within the specified contract period. However, the developer declined to review, accept, or pay for the final plans and stated that it was because of the architect's continued use of alcohol.",
        q: "The architect has sued the developer for breach of contract. Which of the following arguments best supports the architect's claim?",
        opts: [
            "The alcohol use was not a material breach of contract by the architect, since it did not affect the quality of the work.",
            "The developer waived the condition of no alcohol use.",
            "The no-alcohol term was functionally a penalty clause and therefore was unenforceable.",
            "The no-alcohol term would be interpreted as a promise and not a condition."
        ],
        ans: 1,
        exp: "A party whose duty is subject to a condition can waive the benefit of that condition by communicating an intent not to insist on its strict performance[cite: 33]. Waiver can be implied by conduct[cite: 33]. Here, the developer knew the architect was violating the no-alcohol condition, yet still praised the preliminary work and actively encouraged the architect to finish the final plans[cite: 33]. This conduct induced detrimental reliance and constituted a waiver of the non-material express condition, obligating the developer to pay upon completion[cite: 33]."
    },
    {
        id: 11,
        topic: "Acceptance / Option Contracts & Death",
        fp: "A toy collector had purchased ten antique toys over the last several years and had had them restored by an expert in toy restoration. On June 1, the collector sent the 11th antique toy to the expert with a signed note that read: 'Here is another toy for you to restore. As with all prior jobs, I will pay $500 for the work, but no more.' On June 4, after receipt of the collector's June 1 note and the toy, the expert began restoring the toy. On June 6, the collector unexpectedly died. On June 7, unaware of the collector's death, the expert sent the collector a note that stated that the restoration work had begun on June 4. The following day, the expert learned of the collector's death.",
        q: "Does a contract exist that binds the expert and the collector's estate?",
        opts: [
            "No, because the collector died before the expert sent the June 7 note.",
            "No, because the offer lapsed when the collector died.",
            "Yes, because the expert sent the June 7 note before learning of the collector's death.",
            "Yes, because the offer was accepted before the collector's death."
        ],
        ans: 3,
        exp: "The collector's note constituted an offer to enter into a contract. Where an offer invites an offeree to accept by rendering a performance, the offeree's beginning of the requested performance constitutes a legally binding acceptance (or, in unilateral contracts, creates an option contract making the offer irrevocable)[cite: 33]. Because the expert definitively began restoring the toy on June 4, he accepted the contract on that date[cite: 33]. Because the contract was fully formed prior to the collector's death on June 6, the death does not terminate the already-existing contract, binding the estate[cite: 33]."
    },
    {
        id: 12,
        topic: "Terms / Parol Evidence Rule (Consistent Additional Terms)",
        fp: "A contractor agreed to remodel a homeowner's garage for $5,000. Just before the parties signed the one-page written contract, the homeowner called to the contractor's attention the fact that the contract did not specify a time of completion. The parties orally agreed but did not specify in the contract that the contractor would complete the work in 60 days, and then they both signed the contract. The contract did not contain a merger clause. The contractor failed to finish the work in 60 days. The homeowner has sued the contractor for breach of contract.",
        q: "Is the court likely to admit evidence concerning the parties' oral agreement that the work would be completed in 60 days?",
        opts: [
            "No, because the court must ascertain the meaning of the agreement from the terms of the written contract.",
            "No, because the oral agreement was merely part of the parties' negotiations.",
            "Yes, because the contract is ambiguous.",
            "Yes, because the time limit is an additional term that does not contradict the partially integrated written contract."
        ],
        ans: 3,
        exp: "The parol evidence rule prohibits extrinsic evidence of prior or contemporaneous agreements to contradict the terms of a written contract[cite: 33]. However, if the writing is only 'partially integrated' (intended as a final expression of the terms it contains, but not a complete statement of all terms), consistent additional terms may be proved[cite: 33]. The absence of a merger clause and the failure to specify any completion date strongly suggest partial integration[cite: 33]. Because the 60-day oral time limit merely supplements and does not contradict the written text, it is admissible[cite: 33]."
    },
    {
        id: 13,
        topic: "Defenses / Illegality (Revenue-Raising vs Regulatory)",
        fp: "In order to raise revenue, a city required home-repair contractors who performed work within the city limits to pay a licensing fee to a city agency. A contractor who was unaware of the fee requirement agreed to perform home repairs for a city resident. After the contractor completed the work, the resident discovered that the contractor had not paid the licensing fee, and she refused to pay for the repairs, which were otherwise satisfactory.",
        q: "If the contractor sues the resident for breach of contract, how is the court likely to rule?",
        opts: [
            "Although the contract violates the law and is void, the court will require the homeowner to pay the contractor the reasonable value of the work accepted.",
            "Although the contract violates the law, the court will find that public policy does not bar enforcement of the contract, because the purpose of the fee is merely to raise revenue.",
            "Because the contract violates the law and is void, the court will not enforce it.",
            "Because the purpose of the fee is merely to raise revenue, the court will find that the contract does not violate the law but will allow the contractor to recover his costs only."
        ],
        ans: 1,
        exp: "When a party performs a contract without holding a required statutory license, courts analyze the purpose of the licensing statute[cite: 33]. If the statute is regulatory (designed to protect the public from unskilled practitioners, like medical or legal licenses), the contract is void against public policy[cite: 33]. However, if the statute's sole purpose is merely to raise municipal revenue, courts will generally enforce the underlying contract, as public policy does not strictly bar enforcement[cite: 33]. Therefore, the contractor can recover the contract price[cite: 33]."
    },
    {
        id: 14,
        topic: "Third Parties / Third-Party Beneficiaries",
        fp: "Collection of a debtor's $2,000 debt to a creditor was barred by the applicable statute of limitations. The debtor sold and delivered his car to a buyer under a written agreement, signed by the buyer, in which the buyer promised to pay the $2,000 purchase price to the creditor 'in satisfaction of [the debtor's] debt to [the creditor].'",
        q: "Can the creditor recover the $2,000 from the buyer?",
        opts: [
            "No, because payment of the $2,000 to the creditor would undermine the statutory public policy against enforcement of stale claims.",
            "No, because the creditor's rights as an intended beneficiary are subject to any defenses available to the contracting parties between themselves.",
            "Yes, because the buyer's promise to pay $2,000 to the creditor is enforceable by the creditor regardless of whether the debtor was legally obligated to pay the creditor anything.",
            "Yes, because the buyer's promise to pay $2,000 to the creditor revived the uncollectible debt."
        ],
        ans: 2,
        exp: "The creditor is an intended third-party creditor beneficiary of the contract between the debtor and the buyer[cite: 33]. An intended beneficiary can enforce the contract directly against the promisor (the buyer)[cite: 33]. The buyer's promise to pay the $2,000 is fully enforceable as written[cite: 33]. The fact that the underlying debt was barred by the statute of limitations (which the debtor could have asserted as a personal defense if sued directly) does not absolve the buyer of his own independent, explicitly contracted duty to pay the creditor[cite: 33]."
    },
    {
        id: 15,
        topic: "Excuses / Impracticability (Illness)",
        fp: "An engineer signed a two-year contract to serve as the chief safety engineer for a coal mine at a salary of $7,000 per month. The position required the engineer to work underground each workday. After one week on the job, the engineer became very ill. He requested testing of the mine air system, which revealed the presence of a chemical agent to which the engineer had a rare allergic reaction. The engineer promptly quit. The coal mine then hired a qualified replacement for the remainder of the engineer's contract at a salary of $7,500 per month. Assume that no statute or regulation applies.",
        q: "If the coal mine sues the engineer for breach of contract, is the coal mine likely to recover damages?",
        opts: [
            "No, because an at-will employee has the right to terminate an employment contract.",
            "No, because the risk to the engineer's health excused his nonperformance of the contract.",
            "Yes, because the coal mine acted in good faith in mitigating the effect of the engineer's failure to finish the contract term.",
            "Yes, because the mine is reasonably safe for most people."
        ],
        ans: 1,
        exp: "Performance is excused under the doctrine of impracticability when an unanticipated supervening event makes performance highly impracticable or dangerous[cite: 33]. For a personal services contract, the sudden onset of a severe, unanticipated physical illness directly caused by the required working conditions renders performance highly dangerous to the employee's health[cite: 33]. This unforeseen extreme health risk legally discharges the engineer's duty to perform, completely excusing the nonperformance without liability for breach[cite: 33]."
    },
    {
        id: 16,
        topic: "Defenses / Fraud (Non-Disclosure)",
        fp: "Before putting her home up for sale, a homeowner painted the living room ceiling to conceal major water damage caused by a leaking roof that had not yet been repaired. On the first day the home was offered for sale, the homeowner gave a buyer a personal tour. The homeowner made no statements at all regarding the water damage or the roof. Without discovering the water damage or the leaking roof and without consulting a lawyer, the buyer immediately agreed in writing to buy the home for $200,000. Before the closing date, the buyer discovered the water damage and the leaking roof. The cost of repair was estimated at $22,000. The buyer has refused to go through with the purchase.",
        q: "If the homeowner sues the buyer for breach of contract, is the homeowner likely to prevail?",
        opts: [
            "No, because no contract was formed since the buyer did not have a real opportunity to understand the essential terms of the contract.",
            "No, because the homeowner concealed evidence of the water damage and of the leaking roof.",
            "Yes, because the homeowner made no affirmative statements of fact about the water damage or the leaking roof.",
            "Yes, because the buyer acted unreasonably by failing to employ an inspector to conduct an independent inspection of the home."
        ],
        ans: 1,
        exp: "While a party's silent failure to disclose a fact generally does not constitute a misrepresentation, intentional acts of active physical concealment are legally treated as the equivalent of an affirmative misrepresentation of fact[cite: 33]. By actively painting over the water damage for the specific purpose of hiding the leak, the homeowner committed fraud[cite: 33]. This fraudulent inducement grants the buyer the absolute right to avoid the contract, defeating the homeowner's breach of contract claim[cite: 33]."
    },
    {
        id: 17,
        topic: "Remedies / Foreseeability",
        fp: "An experienced rancher contracted to harvest his neighbor's wheat crop for $1,000 'when the crop [was] ripe.' In early September, the neighbor told the rancher that the crop was ripe. The rancher delayed because he had other customers to attend to. The neighbor was concerned that the delay might cause the crop to be lost, for hailstorms were common in that part of the country in the fall. In fact, in early October, before the crop was harvested, it was destroyed by a hailstorm.",
        q: "Is the rancher liable for the loss?",
        opts: [
            "No, because no time for performance was established in the contract.",
            "No, because the neighbor failed to tell the rancher that the crop might be destroyed by a hailstorm.",
            "Yes, because at the time the contract was made, the rancher had reason to foresee the loss as a probable result of his breach.",
            "Yes, because a party who undertakes a contractual obligation is liable for all the consequences that flow from his breach."
        ],
        ans: 2,
        exp: "Under the rule of Hadley v. Baxendale, damages are recoverable only if they were reasonably foreseeable to the breaching party at the time the contract was formed[cite: 33]. Because the rancher was highly experienced in the local agricultural area and hailstorms were explicitly 'common in that part of the country in the fall,' the rancher had objective reason to know that delaying the harvest would expose the crop to a high probability of destruction by hail[cite: 33]. This inherent foreseeability makes him liable for the loss[cite: 33]."
    },
    {
        id: 18,
        topic: "Formation / Intent to Memorialize",
        fp: "A niece had worked in her aunt's bookstore for many years. The bookstore business, which was housed in a building that the aunt leased, was independently appraised at $200,000. The aunt decided to retire. She wrote to the niece, expressing her affection for the niece and offering to sell her the bookstore business for $125,000 if the landlord would agree to a transfer of the lease. The letter also specified when the aunt would transfer the business. The niece wrote back accepting her aunt's offer. In a phone call to the niece, the aunt stated that the landlord had approved the transfer of the lease and that she would now ask her attorney to draft a written contract so that there would be a record of the terms. Before the attorney had finished drafting the document, the aunt changed her mind about selling the business and informed the niece of her decision.",
        q: "In an action for breach of contract brought by the niece against her aunt, is the niece likely to prevail?",
        opts: [
            "No, because the motivation for the transfer of the business was the aunt's affection for her niece, not the price.",
            "No, because the promised consideration was inadequate in light of the market value of the business.",
            "Yes, because the condition concerning the landlord's assent to the transfer of the lease was beyond the control of either party.",
            "Yes, because the document being drafted by the attorney was merely a record of an agreement already made, not a condition to it."
        ],
        ans: 3,
        exp: "If parties reach a mutual manifestation of assent sufficient to conclude a binding contract (via offer and acceptance), the fact that they also manifest an intention to prepare a more formal written memorialization of the agreement does not prevent the initial agreement from binding them[cite: 33]. The aunt's written offer and the niece's written acceptance satisfied all core requirements[cite: 33]. The attorney's draft was merely intended as a formal record, not a condition precedent to formation, rendering the aunt's subsequent revocation legally ineffective[cite: 33]."
    },
    {
        id: 19,
        topic: "Interpretation / Express Terms vs. Trade Usage",
        fp: "An actor straight out of drama school and an agent entered into a one-year written contract that described the services the agent would provide. Because he was eager for work, the actor agreed, in the contract, to pay the agent 15 percent of his yearly earnings. At the end of the year, the actor was so pleased with his many roles that he gave the agent 20 percent of his earnings. After the first contract had expired, the actor and the agent decided to continue working together. They photocopied their old contract, changed the date, and signed it. At the end of the year, a dispute arose as to what percentage of earnings the actor owed. It is a trade practice in the acting profession for actors to pay their agents 10 percent of their yearly earnings, payable at the end of the year.",
        q: "What percentage of the actor's earnings is a court most likely to award the agent?",
        opts: [
            "20 percent, because course of dealing is given greater weight than trade usage.",
            "15 percent, because it was an express term of the contract.",
            "10 percent, because trade usage is the applicable default rule.",
            "Nothing, because the contract is too indefinite."
        ],
        ans: 1,
        exp: "In contract interpretation, courts apply a strict hierarchy of evidence to resolve ambiguities or disputes: express terms carry the greatest weight, followed by course of performance, course of dealing, and finally, usage of trade[cite: 33]. Because the parties actively photocopied their previous contract and executed it, the 15 percent payment figure was an unambiguous, express, written term of the agreement[cite: 33]. This explicit written term absolutely controls and overrides any conflicting industry trade usage (10 percent) or prior informal course of performance (20 percent)[cite: 33]."
    },
    {
        id: 20,
        topic: "Remedies / Consequential Damages in Loan Contracts",
        fp: "A bank agreed to lend a merchant $10,000 for one year at 8 percent interest. The loan proceeds were to be disbursed within two weeks. The merchant intended to use the loan proceeds to purchase a specific shipment of carpets for resale at an expected profit of $5,000 but said nothing about these plans to the bank. The bank failed to disburse the proceeds and refused to assure the merchant that it would do so. The merchant was able to secure a loan from another lender at 10 percent interest for one year. However, by thetime the merchant started the application process for a substitute loan, it was too late to pursue the opportunity to buy the shipment of carpets.",
        q: "In an action against the bank for breach of contract, which of the following amounts is the merchant likely to recover?",
        opts: [
            "Nothing, because lost opportunities are not foreseeable.",
            "Nothing, because the parties failed to tacitly agree that the merchant would be entitled to damages in the event of a breach by the bank.",
            "The difference in cost over time between a loan at 10 percent and a loan at 8 percent.",
            "$5,000, the merchant's foreseeable loss."
        ],
        ans: 2,
        exp: "When a lender breaches a contract to lend money, expectation damages are strictly limited to the additional cost of securing substitute financing (the difference between the original interest rate and the higher substitute rate)[cite: 33]. The merchant cannot recover the $5,000 in lost carpet resale profits because consequential damages are only awarded if they were reasonably foreseeable to the breaching party at the time of contracting[cite: 33]. Because the merchant never informed the bank of the specific carpet deal, the lost profits were unforeseeable to the bank and are unrecoverable[cite: 33]."
    },
    {
        id: 21,
        topic: "Third-Party Beneficiaries / Incidental Beneficiaries",
        fp: "A janitorial service contracted in writing with a hospital for a one-year term. Under the terms of the contract, the janitorial service agreed to clean the hospital daily in accordance with the hygiene standards of the city's health code. Because the janitorial service did not clean a patient's room in accordance with the required hygiene standards, the patient contracted an infection that required continued hospitalization. In addition to suing the hospital, the patient sued the janitorial service for breach of contract.",
        q: "Which of the following statements is most accurate with respect to the breach of contract claim against the janitorial service?",
        opts: [
            "The janitorial service is liable to the patient as a matter of public policy, because it violated the city's health code.",
            "The patient is an intended third-party beneficiary under the contract, because the janitorial service's promise was intended to benefit all hospital patients.",
            "The patient has no claim for breach of contract against the janitorial service, because she is an incidental beneficiary.",
            "The patient cannot sue on the contract, because she was not named in the contract."
        ],
        ans: 2,
        exp: "To sue for breach of contract, a third party must be an 'intended' beneficiary—meaning the original parties explicitly intended the contract to directly satisfy an obligation to or confer a gift upon that specific third party[cite: 33]. Here, the primary purpose of the contract was for the hospital to secure necessary commercial cleaning services to maintain legal compliance[cite: 33]. The patients merely derived an indirect benefit from the clean environment, making them 'incidental' beneficiaries with no legal standing to enforce the contract directly against the service provider[cite: 33]."
    },
    {
        id: 22,
        topic: "Defenses / Fraudulent Misrepresentation",
        fp: "A developer contracted in writing to sell to a buyer a house on a one-acre lot for $100,000. The developer told the buyer that the lot abutted a national park and that the water for the house came from a natural artesian spring. The developer knew that both of these representations were important to the buyer and that both were false. The buyer moved into the house and eight months later learned that a private golf course was being constructed on the adjacent land and that the water for his house was piped in from the city reservoir. The buyer immediately sued the developer to avoid the contract. The construction of the golf course will probably increase the market value of the buyer's property, and the water from the city reservoir exceeds all established standards for drinking water.",
        q: "Is the buyer likely to prevail?",
        opts: [
            "No, because eight months exceeds a reasonable time for contract avoidance.",
            "No, because the developer's misstatements caused no economic harm to the buyer.",
            "Yes, because the contract was void ab initio.",
            "Yes, because the buyer retained the power to avoid the contract due to fraud."
        ],
        ans: 3,
        exp: "If a party's manifestation of assent is induced by a fraudulent or material misrepresentation by the other party upon which the recipient is justified in relying, the contract is voidable by the recipient[cite: 33]. The developer knowingly made false statements of fact specifically to induce the purchase[cite: 33]. The fact that the property actually increased in value or that the water is of excellent quality is legally irrelevant; the victim of fraudulent inducement is entitled to rescind the contract regardless of whether they suffered demonstrable economic harm[cite: 33]."
    },
    {
        id: 23,
        topic: "Performance / Implied Duty of Good Faith",
        fp: "A seller entered into a contract to sell to a buyer a house for a price of $150,000. The contract contained the following clause: 'This contract is conditional on the buyer's securing bank financing at an interest rate of 7% or below.' The buyer did not make an application for bank financing and therefore did not secure it, and refused to proceed with the purchase. The seller sued the buyer for breach of contract.",
        q: "Is the seller likely to prevail?",
        opts: [
            "No, because the buyer did not secure bank financing.",
            "No, because the contract did not expressly impose on the buyer any obligation to apply for bank financing.",
            "Yes, because a court will excuse the condition to avoid a disproportionate forfeiture.",
            "Yes, because a court will imply a term imposing on the buyer a duty to use reasonable efforts to secure bank financing."
        ],
        ans: 3,
        exp: "Every contract imposes an implied covenant of good faith and fair dealing upon each party[cite: 33]. When a contractual duty is subject to a condition precedent (like securing a specific mortgage rate), and that condition's fulfillment relies on the cooperation of one party, the court will imply a duty for that party to make reasonable, good-faith efforts to satisfy the condition[cite: 33]. Because the buyer made absolutely no effort to apply for a loan, he breached this implied duty, legally excusing the condition and rendering him fully liable for breach of contract[cite: 33]."
    },
    {
        id: 24,
        topic: "Third-Party Beneficiaries / Delegation",
        fp: "A computer retail outlet contracted to service a bank's computer equipment for one year at a fixed monthly fee under a contract that was silent as to assignment or delegation by either party. Three months later, the retail outlet sold the service portion of its business to an experienced and well-financed computer service company. The only provision in the agreement between the retail outlet and the computer service company relating to the outlet's contract with the bank stated that the outlet 'hereby assigns all of its computer service contracts to [the computer service company].' The computer service company performed the monthly maintenance required under the service contract. Its performance was defective, however, and caused damage to the bank's operations.",
        q: "Whom can the bank sue for damages arising from the computer service company's defective performance?",
        opts: [
            "The retail outlet only, because the computer service company made no promises to the bank.",
            "Either the retail outlet or the computer service company, because the bank has not released the outlet and the bank is an intended beneficiary of the outlet's agreement with the computer service company.",
            "Either the retail outlet or the computer service company, because since each has the right to enforce the bank's performance of its contract with the retail outlet, mutuality of remedy renders either potentially liable for the defective performance.",
            "The computer service company only, because it is a qualified and a financially responsible supplier of computer services."
        ],
        ans: 1,
        exp: "When a party delegates a contractual duty, the delegator (retail outlet) remains secondarily liable to the obligee (the bank) unless a formal novation is executed[cite: 33]. Simultaneously, when the delegatee (computer service company) accepts an assignment of 'the contract,' it implicitly assumes the duties within it, creating a new obligation[cite: 33]. The bank becomes an intended creditor beneficiary of the agreement between the outlet and the service company[cite: 33]. Therefore, the bank has the right to sue either the original delegator or the new delegatee for the defective performance[cite: 33]."
    },
    {
        id: 25,
        topic: "Defenses / Undue Influence",
        fp: "The mother of a son and a daughter was dying. The daughter visited her mother in a hospice facility and said, 'You know that I have always been the good child, and my brother has always been the bad child. Even so, you have left your property in the will to us fifty-fifty. But it would be really nice if you would sell me the family home for $100,000.' 'I don't know,' said the mother. 'It is worth a lot more than that at least $250,000.' 'That is true,' said the daughter. 'But I have always been good and visited you, and my brother has never visited you, so that ought to be worth something. And besides, if you won't sell me the house for that price, maybe I won't visit you anymore, either.' 'Oh, I wouldn't want that,' said the mother, and she signed a contract selling the house to her daughter for $100,000. Shortly thereafter, the mother died. When her son found out that the house had been sold and was not part of his mother's estate, he sued to have the contract avoided on behalf of the mother.",
        q: "On what ground would the contract most likely be avoided?",
        opts: [
            "Duress.",
            "Inadequate consideration.",
            "Mistake.",
            "Undue influence."
        ],
        ans: 3,
        exp: "Undue influence involves the use of unfair persuasion by an individual who holds a dominant psychological position over a vulnerable party, often leveraging a relationship of trust and confidence[cite: 33]. The dying mother, vulnerable in hospice care, relied on the daughter for emotional support[cite: 33]. The daughter manipulated this dependency by threatening to withhold visitation unless the mother sold the house at a massive discount[cite: 33]. This extreme emotional manipulation and unfair persuasion overcomes the mother's free will, perfectly fitting the definition of undue influence[cite: 33]."
    }
];